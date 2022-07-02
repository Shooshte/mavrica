import neo4j from 'neo4j-driver';

export const driver = neo4j.driver(
  process.env.NX_NEO4J_URI || '',
  neo4j.auth.basic(
    process.env.NX_NEO4J_USER || '',
    process.env.NX_NEO4J_PASS || ''
  )
);
