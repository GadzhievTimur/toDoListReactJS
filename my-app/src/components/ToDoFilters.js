import React, { useEffect, useState } from "react";

export const ToDoFilters = ({ setFilter, todos, remove }) => {
  const [count, setCount] = useState();

  useEffect(() => {
    setCount(todos.filter((todo) => todo.complete === false).length);
  }, [todos]);

  return (
    <div className="ToDoFilter">
      <p className="itemCount">Items: {count}</p>
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
      <button onClick={() => remove()} className="Del">
        Clear all
      </button>
    </div>
  );
};
