import React, { useState } from "react";
import "/home/user/practice/my-app/src/App.css";

export const AddTodoTab = ({ todos, setTodos }) => {
  const [tempVal, setTempVal] = useState("");
  const addTodo = () => {
    if (tempVal.trim()) {
      setTodos([...todos, { id: Date.now(), text: tempVal, isDone: false }]);
      setTempVal("");
    } else {
      return alert("Type something! ");
    }
  };
  return (
    <div className="mainChange">
      <h3>todos</h3>
      <input
        id="inputText"
        placeholder="What needs to be done?"
        onChange={(e) => setTempVal(e.target.value)}
        value={tempVal}
      />

      <button onClick={addTodo}>Add</button>
    </div>
  );
};
