import { globalStyles } from '@styled';

function MyApp({ Component, pageProps }) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
