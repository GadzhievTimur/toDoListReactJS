import React, { useState } from "react";
import "D:\\todoshe4ka\\rep\\toDoListReactJS\\my-app\\src\\App.css";

export const AddTodoTab = ({ todos, setTodos, event }) => {
  const [tempVal, setTempVal] = useState("");
  const addTodo = () => {
    if (tempVal.trim()) {
      setTodos([...todos, { id: Date.now(), text: tempVal, isDone: false }]);
      setTempVal("");
    } else {
      return alert("Type something! ");
    }
  }
  const addTodoEnter = (event) => {
    if(event.keyCode === 13){
      addTodo();
    }
  };
  return (
    <div className="mainChange">
      <h1>todos</h1>
      <input
        id="inputText"
        placeholder="What needs to be done?"
        onChange={(e) => setTempVal(e.target.value)}
        onKeyDown={addTodoEnter}
        value={tempVal}
      />
      <hr id="firstHr" />
    </div>
  );
};
