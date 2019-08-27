import React from "react";
import "./App.css";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import { useSelector /*, useDispatch*/ } from "react-redux";

function App() {
  const todos = useSelector(state => state.todos.todos);
  //const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="container">
        <TodoInput />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
