import React from "react";
import { TodoItem } from "./TodoItem";

export const ListToDo = ({ todos, setTodos, filter }) => {
  const getTodos = (currentFilter) => {
    switch (currentFilter) {
      default:
        return todos;
      case "done":
        return todos.filter((todo) => todo.isDone);
      case "inProcess":
        return todos.filter((todo) => !todo.isDone);
    }
  };

  return (
    <ul className="ListToDo">
      {getTodos(filter).map((todo) => (
        <TodoItem todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
      ))}
    </ul>
  );
};
