import React from "react";

export const ToDoFilters = ({ setFilter, activeTodoLen, remove }) => {
  return (
    <div className="ToDoFilter">
      <p className="itemCount">Items: {activeTodoLen}</p>
      <button onClick={() => setFilter("all")} className="filter" id="all">
        All
      </button>
      <button onClick={() => setFilter("done")} className="filter" id="done">
        Done
      </button>
      <button
        onClick={() => setFilter("inProcess")}
        className="filter"
        id="inProcess"
      >
        In process
      </button>
      <button onClick={() => remove()} className="Del filter">
        Clear completed
      </button>
    </div>
  );
};
