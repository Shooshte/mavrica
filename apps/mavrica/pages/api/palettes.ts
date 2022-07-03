import { getPalettes } from '@mavrica/parser';

import type { NextApiRequest, NextApiResponse } from 'next';
import type { Palette } from '@mavrica/parser';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<string | Palette[]>
) => {
  try {
    const { count, start } = req.body;
    const allPalletes = await getPalettes({
      count: count,
      start: start,
    });
    res.status(200).json(allPalletes);
  } catch (e) {
    console.log(e);
    res.status(500).json(e.message);
  }
};

export default handler;
