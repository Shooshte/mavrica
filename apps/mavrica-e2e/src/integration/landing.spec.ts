describe('palettes list', () => {
  beforeEach(() => {
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

  // TODO: write test for load case with error when data fetching
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
  // TODO: write test for load case that supports infinite scroll
});