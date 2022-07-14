import { unstable_getServerSession } from 'next-auth/next';

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
  (file, params) => {
    return `${params.prefix}/${file.name}`;
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
