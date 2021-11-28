import React from "react";

export const ToDoFilters = ({ setFilter, setTodos, todos}) => {
  let count = todos.length;
  return (
    <div className="ToDoFilter">
      <p id="itemCount">{`Items: ${count}`}</p>
      <button onClick={() => setFilter("all")} className="Filter" id="all">
        All
      </button>
      <button onClick={() => setFilter("done")} className="Filter" id="done">
        Done
      </button>
      <button
        onClick={() => setFilter("inProcess")}
        className="Filter"
        id="inProcess"
      >
        In process
      </button>
      <button onClick={() => setTodos([])} className="Del">
        Clear all
      </button>
    </div>
  );
};
