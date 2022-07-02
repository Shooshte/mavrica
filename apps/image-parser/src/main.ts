import * as express from 'express';
import * as cors from 'cors';

import { handleError } from './app/helpers/error';
import { wasabi } from './app/routes/wasabi';

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
  res.send({ message: 'Server is up and running!' });
});

app.get('/api/wasabi', (req, res, next) => wasabi(req, res, next));
app.use((err, req, res, next) => handleError(err, req, res));

const port = process.env.NX_IMAGE_PARSER_PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
