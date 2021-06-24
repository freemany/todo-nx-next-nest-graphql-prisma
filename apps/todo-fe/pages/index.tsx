import React from 'react';
import { TodoProvider } from '../modules/core/contexts/todoContext';
import TodoList from '../modules/core/components/todoListComponent/todoListComponent';
import { getAllTodos } from '../modules/core/services/todoService';

export const Index = ({ todos }) => {
  return (
    <main>
      <TodoProvider initialTodos={todos}>
        <TodoList />
      </TodoProvider>
    </main>
  );
};

export default Index;

// export const getStaticProps = async () => {
export const getServerSideProps = async () => {
  const todos = await getAllTodos();

  return {
    props: {
      todos,
    },
  };
};
