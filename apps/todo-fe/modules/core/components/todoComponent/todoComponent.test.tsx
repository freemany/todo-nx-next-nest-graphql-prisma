import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Todo from "./todoComponent";
import sino from "sino";

const noop = () => undefined;

describe("Todo", () => {
  afterEach(cleanup);

  it("should render todo", () => {
    const item = { id: "1", name: "todo1" };
    render(<Todo item={item} />);
    screen.getByText("todo1");
  });

  it("should have removeItem called if remove button is clicked", () => {
    const item = { id: "1", name: "todo1" };
    const removeItem = sino.spy();
    render(<Todo item={item} removeItem={removeItem} />);

    fireEvent.click(screen.getByText("Remove X"));
    sino.assert.calledWith(removeItem, item);
  });

  it("should have completeItem called if complete button is clicked", () => {
    const item = { id: "1", name: "todo1", isDone: false };
    const completeItem = sino.spy();
    render(<Todo item={item} completeItem={completeItem} />);
    fireEvent.click(screen.getByText("Complete"));
    sino.assert.calledWith(completeItem, item);
  });
});
