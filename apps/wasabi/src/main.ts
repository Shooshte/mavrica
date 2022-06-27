import 'dotenv';
import express = require('express');
import tus = require('tus-node-server');

const server = new tus.Server();

console.log(process.env.NX_WASABI_KEY);
console.log(process.env.NX_WASABI_SECRET);

server.datastore = new tus.S3Store({
  path: '/mavrica',
  bucket: 's3.eu-west-1.wasabisys.com.mavrica',
  accessKeyId: process.env.NX_WASABI_KEY,
  secretAccessKey: process.env.NX_WASABI_SECRET,
  region: 'eu-west-1',
  partSize: 1024, // each uploaded part will have 1MB,
  tmpDirPrefix: 'tus-s3-store',
});

const app = express();
const uploadApp = express();
uploadApp.all('*', server.handle.bind(server));
app.use('/uploads', uploadApp);

const host = '127.0.0.1';
const port = 1080;
app.listen(port, host);
