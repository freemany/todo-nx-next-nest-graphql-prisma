import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import TodoList from "./todoListComponent";
import { expect } from "chai";
import { TodoProvider } from "../../contexts/todoContext";

describe("Todo list", () => {
  afterEach(cleanup);

  const renderWithProvider = (todos) =>
    render(
      <TodoProvider initialTodos={todos}>
        <TodoList />
      </TodoProvider>
    );

  it("should render todo list", () => {
    render(<TodoList />);
    screen.getByText("Todo list");
  });

  it("should have a list with more than one item", () => {
    const todos = [
      { id: "1", name: "first", isDone: false },
      { id: "2", name: "second", isDone: false },
    ];
    const { container } = renderWithProvider(todos);
    const todoList = container.querySelector(".todoListComponent__list");
    expect(todoList.children.length).to.be.equal(2);
    screen.getByText("first");
    screen.getByText("second");
  });

  it("should remove one item", () => {
    const todos = [
      { id: "1", name: "first", isDone: false },
      { id: "2", name: "second", isDone: false },
    ];
    renderWithProvider(todos);

    fireEvent.click(screen.getByLabelText("Remove first"));
    screen.getByText("second");
    expect(screen.queryByText("first")).to.be.null;
  });

  it("should add item", () => {
    const todos = [];
    renderWithProvider(todos);
    fireEvent.change(screen.getByPlaceholderText("Item name"), {
      target: { value: "test" },
    });
    fireEvent.click(screen.getByText("Add item"));
    screen.getByText("test");
  });

  it("should mark item done and undone with second click", () => {
    const todos = [
      { id: "1", name: "first", isDone: false },
      { id: "2", name: "second", isDone: false },
    ];
    const { container } = renderWithProvider(todos);
    const todoList = container.querySelector(".todoListComponent__list");

    fireEvent.click(screen.getByLabelText("Complete first"));

    expect(todoList.children[0].classList.contains("done")).be.equal(true);
    screen.getByLabelText("Uncomplete first");

    fireEvent.click(screen.getByLabelText("Uncomplete first"));
    expect(todoList.children[0].classList.contains("done")).be.equal(false);
    screen.getByLabelText("Complete first");
  });
});
