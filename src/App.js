import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect, useRef } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  let initTodo;
  // const [addTodo, setAddTodo] = useState();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setsearchResults] = useState([]);
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newTodosList = todos.filter((todos) => {
        return Object.values(todos)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setsearchResults(newTodosList);
    } else {
      setsearchResults(todos);
    }
  };
  
  const onUpdate = (todo) => {
    const filteredTodo = todos.filter((e) => {
      return e !== todo;
    });
    console.log(filteredTodo);
    const selectedTodo = todos.find((e) => {
      return e === todo;
    });
    console.log(selectedTodo);
    
    // setTodos(todo);
  };

  // const useExpired = (time)=>{
  //   const [expired, setExpired] = useState(false);
  //   const timoutRef = useRef();
  //   useEffect(()=>{
  //     timoutRef.current = setTimeout(()=>{
  //       setExpired(true);
  //     }, time);
  //     return ()=>{
  //       clearTimeout(timoutRef.current);
  //     }
  //   },[time]);
  //   return expired;
  // }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    console.log("deleted", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc, dateTime) => {
    console.log("Adding this todo", " ", title, desc, dateTime);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      dateTime: dateTime,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("todosDate", Date.now());

  }, [todos]);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />

                  <Todos
                    todos={searchTerm.length < 1 ? todos : searchResults}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                    term={searchTerm}
                    searchKeyword={searchHandler}
                  />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
