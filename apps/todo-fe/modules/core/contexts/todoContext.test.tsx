// @ts-nocheck
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { TodoProvider } from "./todoContext";
import { expect } from "chai";
import TodoList from "./../components/todoListComponent/todoListComponent";

describe("Todo list", () => {
  afterEach(cleanup);

  it("should show Todo list", () => {
    const initialTodos = [{ id: "1", name: "foo", isDone: false }];
    const { container } = render(
      <TodoProvider initialTodos={initialTodos}>
        <TodoList />
      </TodoProvider>
    );
    const todoList = container.querySelector(".todoListComponent__list");
    expect(todoList.children.length).to.be.equal(1);
    screen.getByText("foo");
  });
});
