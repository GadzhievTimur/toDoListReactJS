import React, { useState } from "react";

export const TodoItem = ({ todo, delOneToDo, checkToDo, renameToDo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const handleEditToDo = (event, id) => {
    if (event.keyCode === 13) {
      if (event.target.value.trim()) {
        renameToDo(id, event.target.value);
        setIsEdit(false);
      } else {
        setIsEdit(false);
      }
    }
  };

  return (
    <>
      <li className={`todoItem${todo.complete}`}>
        <input
          type="checkbox"
          className="checkbox"
          checked={todo.complete}
          onChange={() => checkToDo(todo.id, todo.complete)}
        />
        {isEdit ? (
          <input
            autoFocus
            placeholder={todo.title}
            onKeyDown={(event) => handleEditToDo(event, todo.id)}
            className="newTodoInp"
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
    </>
  );
};
