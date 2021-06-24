import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to todo-fe!</title>
      </Head>
      <div className="App container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default App;
