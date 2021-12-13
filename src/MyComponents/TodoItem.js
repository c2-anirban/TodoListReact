import React from "react";

export const TodoItem = ({ todo, onUpdate, onDelete }) => {
  return (
    <>
      <div>
        <h4 className="mt-2">{todo.title}</h4>
        <p>{todo.desc}</p>
        <p>{todo.dateTime}</p>
        <button
          className="btn my-2 btn-sm btn-warning"
          onClick={() => {
            onUpdate(todo);
          }}
        >
          Update
        </button>
        <br />
        <button
          className="btn my-2 btn-sm btn-danger mt-2"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};
