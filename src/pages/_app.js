import '@/styles/globals.scss';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

// your global styles
const GlobalStyle = createGlobalStyle`
  /* ... */
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider
        theme={
          {
            /* your theme */
          }
        }
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
