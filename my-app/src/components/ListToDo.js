import React from "react";
import { TodoItem } from "./TodoItem";

export const ListToDo = ({
  todos,
  setTodos,
  filter,
  delOneToDo,
  removeAll,
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
          removeAll={removeAll}
          delOneToDo={delOneToDo}
          todo={todo}
          todos={todos}
          key={todo.id}
          setTodos={setTodos}
          checkToDo={checkToDo}
          renameToDo={renameToDo}
        />
      ))}
    </ul>
  );
};
