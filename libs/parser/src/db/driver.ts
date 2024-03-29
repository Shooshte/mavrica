import neo4j from 'neo4j-driver';

const isTest = process.env['NX_TARGET_ENV'] === 'test';

// default driver, can be overriden for tests, etc.
export const defaultDriver = neo4j.driver(
  !isTest
    ? process.env['NX_NEO4J_URI'] || ''
    : process.env['NX_NE04J_TEST_URI'] || '',
  neo4j.auth.basic(
    !isTest
      ? process.env['NX_NEO4J_USER'] || ''
      : process.env['NX_NE04J_TEST_USER'] || '',
    !isTest
      ? process.env['NX_NEO4J_PASS'] || ''
      : process.env['NX_NEO4J_TEST_PASS'] || ''
  )
);
