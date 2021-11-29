import React, { useState } from "react";
import "/home/user/toDoListReact/toDoListReactJS/my-app/src/App.css";

export const TodoItem = ({ todo, delOneToDo, check, rename }) => {
  const [isEdit, setIsEdit] = useState(false);
  const handleEditToDo = (id, text) => {
    if (text.trim()) {
      rename(id, text);
    } else alert("empty field!");
  };
  const editToDoEnter = (event, id) => {
    if (event.keyCode === 13) {
      handleEditToDo(id, event.target.value);
      setIsEdit(false);
    }
  };
  return (
    <>
      <li className={`todoItem${todo.complete}`}>
        <input
          type="checkbox"
          className="checkbox"
          checked={todo.complete}
          onChange={() => check(todo.id, todo.complete)}
        />
        {isEdit ? (
          <input
            placeholder={todo.title}
            onKeyDown={(event) => editToDoEnter(event, todo.id)}
            onSubmit={(e) => handleEditToDo(todo.id, e.target.value)}
          />
        ) : (
          <p
            onDoubleClick={() => setIsEdit(true)}
            className={`todoTextFor${todo.complete}`}
          >
            {todo.title}
          </p>
        )}

        {/* eslint-disable-next-line */}
        <button onClick={() => delOneToDo(todo.id)} className="delBtn">
          ❌
        </button>
      </li>
      <hr className="hrId" />
    </>
  );
};
