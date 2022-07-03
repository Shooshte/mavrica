import { AppProps } from 'next/app';
import Head from 'next/head';

import '@uppy/core/dist/style.css';
import '@uppy/drag-drop/dist/style.css';

import '../styles/app.scss';
import '../styles/reset.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to mavrica!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
