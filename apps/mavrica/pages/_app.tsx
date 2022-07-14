import { AppProps } from 'next/app';
import Head from 'next/head';

import { SessionProvider } from 'next-auth/react';

import '@uppy/core/dist/style.css';
import '@uppy/drag-drop/dist/style.css';
import '@uppy/status-bar/dist/style.css';

import '../styles/reset.scss';
import '../styles/global.scss';
import '../styles/uppy.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to mavrica!</title>
      </Head>
      <SessionProvider session={pageProps.session}>
        <main>
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </>
  );
}

export default CustomApp;
