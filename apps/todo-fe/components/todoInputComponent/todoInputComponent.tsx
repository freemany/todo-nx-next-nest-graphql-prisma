import React, { useState } from 'react';
import { TodoInterface } from '../todoListComponent/todoListComponent';
import { v4 as uuidv4 } from 'uuid';

export interface TodoInputPros {
  addItem: (item: TodoInterface) => void;
}
const TodoInput: React.FC<TodoInputPros> = ({ addItem }) => {
  const [value, setValue] = useState('');
  const createItem = () => {
    addItem({ id: uuidv4(), name: value, isDone: false });
    setValue('');
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
