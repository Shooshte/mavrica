import * as express from 'express';
import * as cors from 'cors';

import { handleError } from './helpers/error';
import { wasabi } from './routes/wasabi';

import type { Request, Response, NextFunction } from 'express';
import type { APIError } from './helpers/error';

export const makeApp = () => {
  const app = express();
  app.use(cors());

  app.get('/api/status', (req, res) => {
    res.send('Server is up and running!');
  });

  app.get('/api/wasabi', (req, res, next) => wasabi(req, res, next));
  app.use((err: APIError, req: Request, res: Response, next: NextFunction) =>
    handleError(err, req, res, next)
  );

  return app;
};
