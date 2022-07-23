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
/// <reference path="./index.d.ts" />

import neo4j from 'neo4j-driver';

// -- This is a parent command --
Cypress.Commands.add('clearDb', async () => {
  const driver = neo4j.driver(
    Cypress.env('neo4j_uri'),
    neo4j.auth.basic(Cypress.env('neo4j_user'), Cypress.env('neo4j_pass'))
  );
  const clearQuery = `
    MATCH(n)
    DETACH DELETE n
  `;
  const session = driver.session();
  await session.writeTransaction((tx) => tx.run(clearQuery));
  session.close();
});
