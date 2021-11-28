import React, { useState } from "react";
import "./App.css";
import { AddTodoTab } from "./components/AddTodo";
import { ListToDo } from "./components/ListToDo";
import { ToDoFilters } from "./components/ToDoFilters";

function App() {
  const [filter, setFilter] = useState("all");
  const [toDoList, setToDoList] = useState([
    { id: 0, text: "Check my toDoList", isDone: false },
  ]);

  return (
    <div className="subRoot">
      <div className="App">
        <AddTodoTab todos={toDoList} setTodos={setToDoList} />
        <ListToDo filter={filter} todos={toDoList} setTodos={setToDoList} />
        <ToDoFilters
          todos={toDoList}
          setTodos={setToDoList}
          setFilter={setFilter}
        />
      </div>
    </div>
  );
}

export default App;
