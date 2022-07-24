// load the type definition for new command we are adding "cy.dataCy"
// note: this definition also will load regular Cypress definition
// because index.d.ts references global "cypress" types
/// <reference path="../support/index.ts" />

import neo4j from 'neo4j-driver';
import { savePalette } from '@mavrica/parser';

import palettes from '../fixtures/palettes.json';

import type { Palette } from '@mavrica/parser';

const saveTestPalette = async (paletteData: Palette): Promise<void> => {
  const driver = neo4j.driver(
    Cypress.env('NEO4J_URI'),
    neo4j.auth.basic(Cypress.env('NEO4J_USER'), Cypress.env('NEO4J_PASS'))
  );

  await savePalette({ driver, palette: paletteData });
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

  it('shows a single palette correctly', () => {
    cy.then(async () => {
      console.log(palettes.singlePalette);
      await saveTestPalette(palettes.singlePalette);
    });

    cy.intercept('/api/palettes').as('getPalettes');
    cy.intercept('/api/palettesCount').as('getPalettesCount');
    cy.visit('/');
    cy.wait(['@getPalettes', '@getPalettesCount']);

    cy.get('h1').contains('Saved Palettes');
    cy.getBySel('palette').should('have.length', 1);
    cy.get('div').contains('No more palettes to load');
  });

  // TODO: write test for load case that has only 1 palette
  // TODO: write test for load case that supports infinite scroll
});
