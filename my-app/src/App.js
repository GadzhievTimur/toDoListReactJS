import React, { useEffect, useState } from "react";
import "./App.css";
import { AddTodoTab } from "./components/AddTodo";
import { ListToDo } from "./components/ListToDo";
import { ToDoFilters } from "./components/ToDoFilters";

const api = "http://localhost:8080/api/todos";

function App() {
  const [filter, setFilter] = useState("all");
  const [toDoList, setToDoList] = useState([]);

  const getTodos = async () => {
    const response = await fetch(api);
    const data = await response.json();
    setToDoList(data);
  };
  const fetchOptions = async (route, method, body) => {
    return fetch(api + route, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then(getTodos);
  };

  useEffect(() => {
    getTodos();
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

  const checkToDo = async (id, complete) => {
    fetchOptions(`/${id}`, "PUT", { complete: !complete });
  };
  const renameToDo = async (id, title) => {
    fetchOptions(`/${id}`, "PUT", { title: title });
  };

  return (
    <div className="subRoot">
      <div className="App">
        <AddTodoTab todos={toDoList} addTodo={postNewToDo} />
        <ListToDo
          renameToDo={renameToDo}
          delOneToDo={delOneToDo}
          filter={filter}
          checkToDo={checkToDo}
          todos={toDoList}
        />
        <ToDoFilters
          remove={removeAll}
          activeTodoLen={
            toDoList.filter((todo) => todo.complete === false).length
          }
          setTodos={setToDoList}
          setFilter={setFilter}
        />
      </div>
    </div>
  );
}
export default App;
