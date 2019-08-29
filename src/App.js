import React, { useEffect } from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import { useSelector /*, useDispatch*/ } from "react-redux";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

function App() {
  const todos = useSelector(state => state.todos.todos);

  useEffect(() => {
    M.AutoInit();
  }, []);

  //const dispatch = useDispatch();
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <ErrorBoundary>
          <TodoInput />
          <TodoList todos={todos} />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
