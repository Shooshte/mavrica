import { unstable_getServerSession } from 'next-auth/next';
import { AwsS3Multipart } from 'uppy';

import { Dashboard } from '@uppy/react';
import Uppy from '@uppy/core';

import { getUppyNextS3MultipartOptions } from '../../lib/uppyMultipartOptions';
import { authOptions } from '../api/auth/[...nextauth]';
import { FilenameGenParams } from '../api/wasabi/[endpoint]';

import type { GetServerSidePropsContext } from 'next';
import type { Session } from 'next-auth';

const uppy = new Uppy();
uppy.use(
  AwsS3Multipart,
  getUppyNextS3MultipartOptions<FilenameGenParams>(
    // The endpoint you saved the earlier file at. No trailing slash.
    '/api/wasabi',
    // This is where we pass in the params used for filename generation
    { prefix: 'test' }
  )
);

const FileUpload = ({ session }: { session: Session }) => {
  console.log(session.user);
  return <Dashboard uppy={uppy} />;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return { props: { session } };
}

export default FileUpload;
