import React from "react";
import Todo from "./todoComponent";
const item = { name: "Hello world", id: "1", isDone: false };
export const Story = () => (
  <div className="container">
    <div className="list-group">
      <Todo
        item={item}
        removeItem={() => undefined}
        completeItem={() => undefined}
      />
    </div>
  </div>
);

Story.storyName = "TodoItem";
export default {
  title: "TodoItem",
  component: Story,
};
