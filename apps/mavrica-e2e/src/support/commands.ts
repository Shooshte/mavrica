// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import neo4j from 'neo4j-driver';

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    clearDb(): Promise<void>;
  }
}
//
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

  console.log('clearing db...');

  const session = driver.session();
  await session.writeTransaction((tx) => tx.run(clearQuery));
  session.close();

  console.log('db cleared...');
});
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
