import React, { useEffect, useState } from "react";
import "./App.css";
import { AddTodoTab } from "./components/AddTodo";
import { ListToDo } from "./components/ListToDo";
import { ToDoFilters } from "./components/ToDoFilters";

const api = "http://localhost:8080/api/todos";

function App() {
  const [filter, setFilter] = useState("all");
  const [toDoList, setToDoList] = useState([]);

  const fetchTodos = async () => {
    const response = await fetch(api);
    const data = await response.json();
    setToDoList(data);
  };

  const fetchOptions = (route, method, body) => {
    return fetch(api + route, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then(fetchTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const postNewToDo = async (title) => {
    fetchOptions("/", "POST", { title: title });
  };

  const delOneToDo = async (id) => {
    fetchOptions(`/${id}`, "DELETE");
  };
  const removeAll = async () => {
    fetchOptions("/", "DELETE");
  };

  const check = async (id, complete) => {
    fetchOptions(`/${id}`, "PUT", { complete: !complete });
  };
  const rename = async (id, title) => {
    fetchOptions(`/${id}`, "PUT", { title: title });
  };
  return (
    <div className="subRoot">
      <div className="App">
        <AddTodoTab todos={toDoList} addTodo={postNewToDo} />
        <ListToDo
          rename={rename}
          delOneToDo={delOneToDo}
          filter={filter}
          check={check}
          todos={toDoList}
          setTodos={setToDoList}
        />
        <ToDoFilters
          remove={removeAll}
          todos={toDoList}
          setTodos={setToDoList}
          setFilter={setFilter}
        />
      </div>
    </div>
  );
}
export default App;
