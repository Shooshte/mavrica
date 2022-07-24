// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// load the global Cypress types
/// <reference path="./index.ts" />

import neo4j from 'neo4j-driver';

// -- This is a parent command --
Cypress.Commands.add('clearDb', async () => {
  const driver = neo4j.driver(
    Cypress.env('NEO4J_URI'),
    neo4j.auth.basic(Cypress.env('NEO4J_USER'), Cypress.env('NEO4J_PASS'))
  );
  const clearQuery = `
    MATCH(n)
    DETACH DELETE n
  `;
  const session = driver.session();
  await session.writeTransaction((tx) => tx.run(clearQuery));
  session.close();
});

Cypress.Commands.add('getBySel', (selector, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args);
});
