import type { Request, Response, NextFunction } from 'express';

import { error } from '../helpers/error';
import { getFile, getBufferPalette } from '@mavrica/parser';

export const wasabi = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filePath = req.query['filePath'];
    if (!filePath || typeof filePath !== 'string') {
      // TODO: add more specific filePath validation here
      next(error(400, 'Missing or invalid file path!'));
      return;
    }
    const fileBuffer = await getFile(filePath);
    const paletteColors = await getBufferPalette(fileBuffer);
    res.send(paletteColors);
  } catch (e) {
    // TODO: figure out how to properly type this
    // @ts-expect-error no idea how to fix this, will google later
    next(error(500, e.message));
  }
};
