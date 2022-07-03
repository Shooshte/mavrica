import * as AWS from 'aws-sdk';

export const createS3Client = (): AWS.S3 => {
  const credentials = new AWS.SharedIniFileCredentials({ profile: 'wasabi' });
  AWS.config.credentials = credentials;

  AWS.config.credentials.accessKeyId = process.env['NX_WASABI_KEY'] || '';
  AWS.config.credentials.secretAccessKey =
    process.env['NX_WASABI_SECRET'] || '';

  AWS.config.region = process.env['NX_WASABI_REGION'];
  const ep = new AWS.Endpoint(process.env['NX_WASABI_ENDPOINT'] || '');
  const s3 = new AWS.S3({ endpoint: ep });
  return s3;
};

export const getFile = async (key: string): Promise<Buffer> => {
  const s3 = createS3Client();
  const params = {
    Bucket: process.env['NX_WASABI_BUCKET'] || '',
    Key: key,
  };

  const data = await s3.getObject(params).promise();
  return data.Body as Buffer;
};

export const getSeedKeys = async (): Promise<string[]> => {
  const s3 = createS3Client();
  const params = {
    Bucket: process.env['NX_WASABI_BUCKET'] || '',
    Prefix: 'seed/',
    StartAfter: 'seed/',
  };

  const data = await s3.listObjectsV2(params).promise();
  // @ts-ignore obj.Key will always be defined here
  return data.Contents.map((obj) => obj?.Key);
};
