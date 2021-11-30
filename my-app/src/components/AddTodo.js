import React, { useState } from "react";
import "/home/user/toDoListReact/toDoListReactJS/my-app/src/App.css";

export const AddTodoTab = ({ addTodo }) => {
  const [tempVal, setTempVal] = useState("");
  const addNewTodo = () => {
    if (tempVal.trim()) {
      addTodo(tempVal);
      setTempVal("");
    } else {
      return alert("Type something! ");
    }
  };
  const addTodoEnter = (event) => {
    if (event.keyCode === 13) {
      addNewTodo();
    }
  };
  return (
    <div className="mainChange">
      <h1>todos</h1>
      <input
        className="inputText"
        placeholder="What needs to be done?"
        onChange={(e) => setTempVal(e.target.value)}
        onKeyDown={addTodoEnter}
        value={tempVal}
      />
    </div>
  );
};
