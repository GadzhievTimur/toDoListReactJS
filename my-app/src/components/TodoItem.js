import React from "react";
import "D:\\todoshe4ka\\rep\\toDoListReactJS\\my-app\\src\\App.css";

export const TodoItem = ({ todo, todos, setTodos }) => {
  const delToDo = (id) => {
    setTodos(() => todos.filter((todo) => todo.id !== id));
  };

  const markToDo = (id) => {
    setTodos(() =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <>
      <li className={`todoItem${todo.isDone}`}>
        <input
          type="checkbox"
          className="checkbox"
          checked={todo.isDone}
          onChange={() => markToDo(todo.id)}
        />
        <p id={`todoTextFor${todo.isDone}`}>{todo.text}</p>
        {/* eslint-disable-next-line */}
        <button onClick={() => delToDo(todo.id)} id="delBtn">
          ❌
        </button>
      </li>
      <hr id="hrId"/>
    </>
  );
};
