import { driver } from '../../lib/db/driver';

import type { NextApiRequest, NextApiResponse } from 'next';

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

export default handler;
