import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'configs/theme';

import QueryClientProvider from 'libs/react-query';

export default function MyApp({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  // React.useEffect(() => {
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles) {
  //     jssStyles?.parentElement?.removeChild(jssStyles);
  //   }
  // }, []);

  return (
    <>
      <QueryClientProvider dehydratedState={pageProps.dehydratedState}>
        <Head>
          <title>Livus</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
