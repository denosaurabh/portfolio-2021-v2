import { NextSeo } from 'next-seo';

import {  globalStyles } from '@styled';

import Page from '@layouts/page';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  globalStyles();
  return (
    <Page>
      <NextSeo {...SEO} />
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
