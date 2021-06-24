// @ts-nocheck
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import useTodo from "./useTodo";
import { expect } from "chai";
import { TodoProvider } from "./todoContext";

describe("useTodo", () => {
  it("should use todo", () => {
    const todos = [
      { id: "1", name: "first", isDone: false },
      { id: "2", name: "second", isDone: false },
    ];
    const Fake = () => {
      const { todoItems, dispatch } = useTodo();
      expect(todoItems.length).to.equal(2);

      return null;
    };

    const { container } = render(
      <TodoProvider initialTodos={todos}>
        <Fake />
      </TodoProvider>
    );
  });
});
