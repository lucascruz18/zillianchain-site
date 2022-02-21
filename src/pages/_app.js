/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import GlobalStyle from '../styles/GlobalStyles';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
