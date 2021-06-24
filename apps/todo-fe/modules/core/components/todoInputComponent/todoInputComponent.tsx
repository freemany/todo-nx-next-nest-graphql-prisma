import React, { useState } from 'react';
import { TodoInterface } from '../todoListComponent/todoListComponent';
import { createTodo } from '../../services/todoService';

export interface TodoInputPros {
  addItem: (item: TodoInterface) => void;
}
const TodoInput: React.FC<TodoInputPros> = ({ addItem }) => {
  const [value, setValue] = useState('');
  const createItem = async () => {
    try {
      const newTodo = await createTodo(value);
      addItem(newTodo);
      setValue('');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Item name"
          aria-label="item name"
          onChange={(event) => setValue(event.target.value)}
          onBlur={(event) => setValue(event.target.value)}
          value={value}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={createItem}>
            Add item
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoInput;
