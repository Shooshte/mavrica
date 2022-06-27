import { saveKeyPalette } from '../../lib/palette';

import type { NextApiRequest, NextApiResponse } from 'next';
import type { Palette } from '../../lib/types/color';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Palette | string>
) => {
  const { filePath } = req.body;
  if (!filePath) {
    res.status(400).json('No file path provided');
  }
  const palette = await saveKeyPalette(filePath);
  res.status(200).json(palette);
};

export default handler;
