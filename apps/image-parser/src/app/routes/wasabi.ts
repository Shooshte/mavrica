import type { Request, Response } from 'express';

import { error } from '../helpers/error';
import { saveKeyPalette } from '../../../../../libs/palette';

export const wasabi = async (req: Request, res: Response, next) => {
  try {
    const filePath = req.query.filePath;
    if (!filePath || typeof filePath !== 'string') {
      // TODO: add more specific filePath validation here
      next(error(400, 'Missing or invalid file path!'));
      return;
    }
    const palette = await saveKeyPalette(filePath);
    res.send(palette);
  } catch (e) {
    console.log(e);
    console.log(e.stack);
    next(error(500, e.message));
  }
};
