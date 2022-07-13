import { unstable_getServerSession } from 'next-auth/next';
import { v4 as uuid } from 'uuid';

import { createS3Client } from '@mavrica/parser';
import { UppyNextS3MultipartEndpoint } from '../../../lib/uppyMultipartEndpoint';
import { authOptions } from '../auth/[...nextauth]';

import type { NextApiRequest, NextApiResponse } from 'next';

const S3_BUCKET_NAME = process.env['NX_WASABI_BUCKET'];
const EXPIRE_TIME_SEC = 1 * 60 * 60;

const s3 = createS3Client();

export type FilenameGenParams = { prefix: string };

const endpointHandler = new UppyNextS3MultipartEndpoint<FilenameGenParams>(
  s3,
  S3_BUCKET_NAME,
  EXPIRE_TIME_SEC,
  // This is used to specify how you would like the file to be named
  // In this example, I am passing a prefix from the client, then adding
  // a year-month folder, then a uuid with the filename appended at the end
  (file, params) => {
    const date = new Date();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${params.prefix}/${year}-${month}/${uuid()}_${file.name}`;
  }
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ err: 'Unauthorized' });
  }

  return endpointHandler.handle(req, res);
}
