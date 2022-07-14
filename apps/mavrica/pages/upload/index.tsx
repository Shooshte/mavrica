import { unstable_getServerSession } from 'next-auth/next';
import { AwsS3Multipart } from 'uppy';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { DragDrop } from '@uppy/react';
import { StatusBar } from '@uppy/react';
import Uppy from '@uppy/core';

import { getUppyNextS3MultipartOptions } from '../../lib/uppyMultipartOptions';
import { authOptions } from '../api/auth/[...nextauth]';
import { FilenameGenParams } from '../api/wasabi/[endpoint]';
import { getImagePalette, saveSourceBuckets } from '@mavrica/parser';

import type { GetServerSidePropsContext } from 'next';
import type { Session } from 'next-auth';

import styles from './Upload.module.scss';

const uppy = new Uppy({
  restrictions: {
    maxNumberOfFiles: 1,
    allowedFileTypes: ['image/*'],
  },
});

const FileUpload = ({ session }: { session: Session }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const onUploadSuccess = async (file, response) => {
    setIsProcessing(true);

    try {
      // TODO: rewrite these as API endpoint to prevent exposing DB credetials in the browser
      const palette = await getImagePalette(response.body.location);
      const paletteId = await saveSourceBuckets({
        buckets: palette,
        imageUrl: response.body.location,
        userEmail: session.user.email,
      });
      router.push(`/createPalette/${paletteId}`);
    } catch (e) {
      console.log(e);
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    uppy.use(
      AwsS3Multipart,
      getUppyNextS3MultipartOptions<FilenameGenParams>('/api/wasabi', {
        prefix: 'dev',
      })
    );
    uppy.setMeta({
      user: session.user,
    });
    uppy.on('upload-success', onUploadSuccess);
  }, []);

  return (
    <div className={styles.container}>
      {!isProcessing ? (
        <>
          <DragDrop
            uppy={uppy}
            note="All uploaded files will be publicly accessible."
            height={300}
          />
          <StatusBar
            hideAfterFinish={false}
            locale={{
              strings: {
                uploadXFiles: {
                  0: 'Upload file',
                  1: 'Upload file',
                },
                uploadXNewFiles: {
                  0: 'Upload file',
                  1: 'Upload file',
                },
              },
            }}
            showProgressDetails={true}
            uppy={uppy}
          />
        </>
      ) : (
        'Turning your image into a palette...'
      )}
      <button
        onClick={() => {
          onUploadSuccess(
            { name: 'Adoration of the Shepherds.jpeg' },
            {
              body: {
                location:
                  'https://s3.eu-west-1.wasabisys.com/mavrica/dev/Adoration of the Shepherds.jpeg',
              },
            }
          );
        }}
      >
        Check file
      </button>
    </div>
  );
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
