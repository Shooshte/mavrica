describe('palettes list', () => {
  beforeEach(() => {
    cy.clearDb();
  });

  // TODO: write tests for load case with no palettes
  it('should load the landing page', () => {
    cy.intercept('/api/palettes').as('getPalettes');
    cy.intercept('/api/palettesCount').as('getPalettesCount');

    cy.visit('/');
    cy.wait(['@getPalettes', '@getPalettesCount']);
  });

  // TODO: write test for load case with error when data fetching
  // TODO: write test for load case that has only 1 palette
  // TODO: write test for load case that supports infinite scroll
});
