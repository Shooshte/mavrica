import { AppProps } from 'next/app';
import Head from 'next/head';

import '@uppy/core/dist/style.css';
import '@uppy/drag-drop/dist/style.css';

import '../styles/reset.scss';
import '../styles/global.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to mavrica!</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
