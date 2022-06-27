import { getFile } from '../../lib/wasabi';
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

    const parsedPalettes = await Promise.all(
      allPalletes.slice(0, 10).map(async (palette) => {
        const sources = await Promise.all(
          palette.sources.map(async (source) => {
            const fileBuffer = await getFile(source);
            return fileBuffer.toString('base64');
          })
        );

        return {
          ...palette,
          sources,
        };
      })
    );
    res.status(200).json(parsedPalettes);
  } catch (e) {
    console.log(e);
    res.status(500).json(e.message);
  }
};

export default handler;
