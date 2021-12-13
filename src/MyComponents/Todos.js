import React, { useRef } from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  const inputEl = useRef("");
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  console.log(props);
  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      <form className="d-flex">
        <input
          ref={inputEl}
          className="form-control me-2 search"
          type="search"
          placeholder="Search Todo"
          aria-label="Search"
          value={props.term}
          onChange={getSearchTerm}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      {props.todos.length === 0
        ? "No Todos to display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} onUpdate={props.onUpdate}/>
            );
          })}
    </div>
  );
};
