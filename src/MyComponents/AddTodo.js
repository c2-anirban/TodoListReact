import React, { useState } from "react";
// import DateTimePicker from "react-datetime-picker";




export const AddTodo = ({ addTodo }) => {
  
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [dateTime, setdateTime] = useState(new Date());


  

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc || !dateTime) {
      alert("Title or Description cannot be blank");
    } else {
      addTodo(title, desc, dateTime);
      setTitle("");
      setDesc("");
      setdateTime("");

      
    }
  };
  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        <div className="mb-3 react-datetime-picker">
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setdateTime(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className=" btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};
