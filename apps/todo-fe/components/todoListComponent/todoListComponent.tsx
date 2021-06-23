import React, { useState, useCallback, useReducer, useContext } from "react";
import { ACTIONS } from "../../constants/contants";
import { TodoContext } from "./../../contexts/todoContext";
import Todo from "./../todoComponent/todoComponent";
import TodoInput from "./../todoInputComponent/todoInputComponent";

export interface TodoInterface {
  name: string;
  id: string;
  isDone: boolean;
}
export interface TodoListInterface {}
const TodoList: React.FC<TodoListInterface> = () => {
  const { todoItems, dispatch } = useContext(TodoContext);
  const removeItem = useCallback((item) => {
    dispatch({ type: ACTIONS.REMOVE_TODO, item });
  }, []);
  const addItem = useCallback((item) => {
    dispatch({ type: ACTIONS.ADD_TODO, item });
  }, []);
  const completeItem = useCallback((item) => {
    dispatch({ type: ACTIONS.COMPLETE_TODO, item });
  }, []);

  return (
    <div>
      <h1>Todo list</h1>
      <TodoInput addItem={addItem} />
      <ul className="todoListComponent__list">
        {todoItems?.map((todo) => (
          <Todo
            key={todo.id}
            item={todo}
            removeItem={removeItem}
            completeItem={completeItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
