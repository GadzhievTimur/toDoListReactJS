import React from "react";
import { TodoItem } from "./TodoItem";

export const ListToDo = ({
  todos,
  filter,
  delOneToDo,
  checkToDo,
  renameToDo,
}) => {
  const getTodos = (currentFilter) => {
    switch (currentFilter) {
      default:
        return todos;
      case "done":
        return todos.filter((todo) => todo.complete);
      case "inProcess":
        return todos.filter((todo) => !todo.complete);
    }
  };

  return (
    <ul className="ListToDo">
      {getTodos(filter).map((todo) => (
        <TodoItem
          delOneToDo={delOneToDo}
          todo={todo}
          key={todo.id}
          checkToDo={checkToDo}
          renameToDo={renameToDo}
        />
      ))}
    </ul>
  );
};
