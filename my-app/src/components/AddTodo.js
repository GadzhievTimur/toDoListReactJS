import React, { useState } from "react";
import "../App.css";

export const AddTodoTab = ({ addTodo }) => {
  const [tempVal, setTempVal] = useState("");
  const addTodoEnter = (event) => {
    if (event.keyCode === 13) {
      if (event.target.value.trim()) {
        addTodo(event.target.value);
        event.target.value = "";
      } else {
        alert("Type something! ");
      }
    }
  };

  return (
    <div className="mainChange">
      <h1>todos</h1>
      <input
        className="inputText"
        placeholder="What needs to be done?"
        onKeyDown={addTodoEnter}
      />
    </div>
  );
};
