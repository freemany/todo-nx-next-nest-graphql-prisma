import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { TodoProvider } from '../contexts/todoContext';
import TodoList from '../components/todoListComponent/todoListComponent';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to todo-fe!</title>
      </Head>
      <div className="App container">
        <main>
          <TodoProvider>
            <TodoList />
          </TodoProvider>
        </main>
      </div>
    </>
  );
}

export default CustomApp;
