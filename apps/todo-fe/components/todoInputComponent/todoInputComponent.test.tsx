import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import TodoInput from "./todoInputComponent";
import sino from "sinon";
import { expect } from "chai";

const noop = () => undefined;

describe("Todo input", () => {
  afterEach(cleanup);

  const renderComponent = ({ addItem }) =>
    render(<TodoInput addItem={addItem} />);

  it("render todo list", () => {
    renderComponent({ addItem: noop });
    screen.getByText("Add item");
  });

  it("should change value", () => {
    renderComponent({ addItem: noop });
    fireEvent.change(screen.getByPlaceholderText("Item name"), {
      target: { value: "test" },
    });

    expect(screen.getByPlaceholderText("Item name").value).to.equal("test");
  });

  it("should blur value", () => {
    renderComponent({ addItem: noop });
    fireEvent.blur(screen.getByPlaceholderText("Item name"), {
      target: { value: "test" },
    });

    expect(screen.getByPlaceholderText("Item name").value).to.equal("test");
  });

  it("should add item and clear input value", () => {
    const addItem = sino.spy();
    renderComponent({ addItem });
    fireEvent.change(screen.getByPlaceholderText("Item name"), {
      target: { value: "test" },
    });

    const btn = screen.getByText("Add item");
    fireEvent.click(btn);

    sino.assert.calledOnce(addItem);
    expect(screen.getByPlaceholderText("Item name").value).to.equal("");
  });
});
