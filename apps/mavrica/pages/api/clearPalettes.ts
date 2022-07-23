import neo4j from 'neo4j-driver';
import { withSentry } from '@sentry/nextjs';

import type { NextApiRequest, NextApiResponse } from 'next';

const isTest = process.env['NX_TARGET_ENV'] === 'test';

const driver = neo4j.driver(
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

const handler = async (req: NextApiRequest, res: NextApiResponse<string>) => {
  try {
    const session = driver.session();
    const deleteQuery = `
    MATCH(p:Palette)-[:INCLUDES]->(c:Color)
    DETACH DELETE p, c
  `;

    await session.writeTransaction((tx) => tx.run(deleteQuery));
    res.status(200).json('success!');
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export default withSentry(handler);
