import apolloClient from './apolloClient';
import { gql } from '@apollo/client';

export const getAllTodos = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        todos {
          id
          name
          isComplete
        }
      }
    `,
  });

  return data.todos;
};

export const createTodo = async (name: string) => {
  const { data } = await apolloClient.mutate({
    mutation: gql`
      mutation {
        createTodo(createTodoInput: { 
            name: "${name}",
            isComplete: false 
        }) {
          id
          name
          isComplete
        }
      }
    `,
  });

  return data.createTodo;
};

export const removeTodo = async (id: number) => {
  const { data } = await apolloClient.mutate({
    mutation: gql`
      mutation {
        removeTodo(id: ${id}) {
          id
          name
          isComplete
        }
      }
    `,
  });

  return data.removeTodo;
};

export const updateTodo = async (id: number, isComplete: boolean) => {
  const { data } = await apolloClient.mutate({
    mutation: gql`
      mutation {
        updateTodo(updateTodoInput: { id: ${id}, isComplete: ${isComplete} }) {
          id
          name
          isComplete
        }
      }
    `,
  });

  return data.updateTodoInput;
};
