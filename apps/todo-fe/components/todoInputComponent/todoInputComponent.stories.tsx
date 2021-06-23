import React from "react";
import TodoInput from "./todoInputComponent";

export const Story = () => (
  <div className="container">
    <TodoInput addItem={() => undefined} />
  </div>
);

Story.storyName = "TodoInput";
export default {
  title: "TodoInput",
  component: Story,
};
