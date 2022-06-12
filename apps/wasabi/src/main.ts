import 'dotenv';
import tus = require('tus-node-server');

const server = new tus.Server();
server.datastore = new tus.FileStore({
  path: '/files',
});

const host = '127.0.0.1';
const port = 1080;

// @ts-expect-error: ts-node-server imports listed arguments types are wrong according to their docs
server.listen({ host, port }, () => {
  console.log(
    `[${new Date().toLocaleTimeString()}] tus server listening at http://${host}:${port}`
  );

  console.log('process.env: ', process.env);

  server.datastore = new tus.S3Store({
    path: '/files',
    bucket: 'mavrica',
    accessKeyId: process.env.NX_WASABI_KEY,
    secretAccessKey: process.env.NX_WASABI_SECRET,
    region: 'eu-west-1',
    partSize: 8 * 1024, // each uploaded part will have ~8MB,
    tmpDirPrefix: 'tus-s3-store',
  });
});
