import * as express from 'express';
import * as cors from 'cors';

import { handleError } from './helpers/error';
import { wasabi } from './routes/wasabi';

export const makeApp = () => {
  const app = express();
  app.use(cors());

  app.get('/api/status', (req, res) => {
    res.send('Server is up and running!');
  });

  app.get('/api/wasabi', (req, res, next) => wasabi(req, res, next));
  app.use((err, req, res, next) => handleError(err, req, res));

  return app;
};
