// load the type definition for new command we are adding "cy.dataCy"
// note: this definition also will load regular Cypress definition
// because index.d.ts references global "cypress" types
/// <reference path="../support/index.ts" />

import neo4j from 'neo4j-driver';
import { savePalette } from '@mavrica/parser';

// TODO: improve the dataset so it resembles actual production palettes and all possible data combinations
import palettes from '../fixtures/palettes.json';

import type { Palette } from '@mavrica/parser';

const saveTestPalette = async (paletteData: Palette): Promise<void> => {
  const driver = neo4j.driver(
    Cypress.env('NEO4J_URI'),
    neo4j.auth.basic(Cypress.env('NEO4J_USER'), Cypress.env('NEO4J_PASS'))
  );

  await savePalette({ driver, palette: paletteData });
};

const checkPalette = (palette: Palette): void => {
  // check that Palette name is displayed correctly
  cy.getBySel('palette').get('h2').contains(palette.name);
  // check that palette colors are displayed correctly
  const sortedColors = palette.colors.sort(
    (b, a) => parseInt(a.hex.slice(1, 6), 16) - parseInt(b.hex.slice(1, 6), 16)
  );

  cy.getBySel('palette')
    .contains(palette.name)
    .get('ul')
    .get('li')
    .each(($el, index) => {
      cy.wrap($el).should(
        'have.css',
        'background-color',
        hexToRgb(sortedColors[index].hex)
      );
    });
  // check that palette sources are displatey correctly
  // TODO: implement sorting by source upload date
  const parsedSources = [...palette.sources].reverse().map((source) => {
    const imageHref = `https://s3.eu-west-1.wasabisys.com/mavrica/${encodeURIComponent(
      source
    )}`;
    const imageUrl = `/_next/image?url=${encodeURIComponent(
      imageHref
    )}&w=3840&q=100`;

    return {
      imageHref,
      imageUrl,
    };
  });

  cy.getBySel('sources')
    .get('a')
    .each(($el, index) => {
      cy.wrap($el).should('have.attr', 'href', parsedSources[index].imageHref);
    });

  cy.getBySel('sources')
    .get('a')
    .get('img')
    .each(($el, index) => {
      cy.wrap($el).should('have.attr', 'src', parsedSources[index].imageUrl);
    });
};

const checkPalettes = (palettes: Palette[]): void => {
  palettes.forEach(checkPalette);
};

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return `rgb(${r}, ${g}, ${b})`;
  }
  return null;
};

describe('palettes list', () => {
  before(() => {
    // Not sure if this is needed or should be called per individual case
    cy.clearDb();
  });

  it('show no saved palettes message when the database is empty', () => {
    cy.intercept('/api/palettes').as('getPalettes');
    cy.intercept('/api/palettesCount').as('getPalettesCount');

    cy.visit('/');
    cy.wait(['@getPalettes', '@getPalettesCount']);
    cy.get('p').contains('No saved palettes to display.');
  });

  it('show error message when fetching palettes fails', () => {
    cy.intercept('/api/palettes', {
      statusCode: 500,
      body: 'Get palettes error message!',
    }).as('getPalettes');
    cy.intercept('/api/palettesCount').as('getPalettesCount');

    cy.visit('/');
    cy.wait(['@getPalettes', '@getPalettesCount']);
    cy.get('p').contains(
      'Error fetching palettes: Get palettes error message!'
    );
  });

  it('show error message when fetching palettes count fails', () => {
    cy.intercept('/api/palettes').as('getPalettes');
    cy.intercept('/api/palettesCount', {
      statusCode: 500,
      body: 'Get palettes count error message!',
    }).as('getPalettesCount');

    cy.visit('/');
    cy.wait(['@getPalettes', '@getPalettesCount']);
    cy.get('p').contains('Get palettes count error message!');
  });

  // TODO: write test for load case that has only 1 palette
  it('shows a single palette correctly', () => {
    cy.then(async () => {
      await saveTestPalette(palettes.singlePalette);
    });

    cy.intercept('/api/palettes').as('getPalettes');
    cy.intercept('/api/palettesCount').as('getPalettesCount');
    cy.visit('/');
    cy.wait(['@getPalettes', '@getPalettesCount']);

    // Heading at start of the list
    cy.get('h1').contains('Saved Palettes');
    // All Palettes count
    cy.getBySel('palette').should('have.length', 1);
    checkPalette(palettes.singlePalette);
    // Footer at the end of the list
    cy.get('div').contains('No more palettes to load');
  });

  // TODO: write test for load case that supports infinite scroll
  // it('renders multiple palettes correctly', () => {
  //   // First, clear the DB and then save the test data
  //   cy.clearDb();
  //   cy.then(async () => {
  //     for (let i = 0; i < palettes.palettes.length; i++) {
  //       await saveTestPalette(palettes.palettes[i]);
  //     }
  //   });

  //   cy.intercept('/api/palettes').as('getPalettes');
  //   cy.intercept('/api/palettesCount').as('getPalettesCount');
  //   cy.visit('./');
  //   cy.wait(['@getPalettes', '@getPalettesCount']);

  //   // Heading at start of the list
  //   cy.get('h1').contains('Saved Palettes');
  //   // since we have a virtualised list, only 2 palettes should be visible
  //   cy.getBySel('palette').should('have.length', 2);
  //   checkPalettes([...palettes.palettes].reverse().slice(0, 2));

  //   // TODO: scroll to the bottom

  //   // first only five palettes should be visible
  //   // after scrolling, all palettes should be visible
  // });
});
