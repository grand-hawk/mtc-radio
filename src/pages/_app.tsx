import Head from 'next/head';
import React from 'react';

import { Provider } from '@/components/ui/provider';
import Layout from '@/components/utils/layout';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Radio</title>
      </Head>

      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
