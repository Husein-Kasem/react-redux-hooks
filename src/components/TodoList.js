import React from "react";
import Todo from "./Todo";

const TodoList = props =>
  props.todos ? (
    <div className="row">
      {props.todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  ) : (
    <div>No todos for now...</div>
  );

export default TodoList;
