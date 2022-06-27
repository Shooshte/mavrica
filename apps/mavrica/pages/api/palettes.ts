import { getPalettes } from '../../lib/db/palette';

import type { Palette } from '../../lib/types/color';
import type { NextApiRequest, NextApiResponse } from 'next';

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
