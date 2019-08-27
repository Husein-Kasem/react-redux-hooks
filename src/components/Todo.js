import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  completeTodo,
  uncompleteTodo
} from "../actions/todoActions";

export default function Todo({ todo }) {
  const dispatch = useDispatch();

  const onDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  const onToggleCompleteTodo = () => {
    todo.completed
      ? dispatch(uncompleteTodo(todo.id))
      : dispatch(completeTodo(todo.id));
  };

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            className="activator responsive-img card-image"
            src={todo.image}
            alt={todo.title}
          />
        </div>
        <div className="card-content">
          <span className={"card-title activator grey-text text-darken-4 "}>
            {todo.title}
            <i className="material-icons right">keyboard_arrow_up</i>
          </span>
        </div>
        <div className="card-action">
          <div className="row">
            <div className="col s6">
              <button
                className="btn-floating center-align"
                onClick={onDeleteTodo}
              >
                <i className="material-icons">delete_outline</i>
              </button>
            </div>
            <div className="col s6">
              <button
                className="btn-floating center-align"
                onClick={onToggleCompleteTodo}
              >
                <i className="material-icons">
                  {todo.completed ? "check_box" : "check_box_outline_blank"}
                </i>
              </button>
            </div>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {todo.title}
            <i className="material-icons right">close</i>
          </span>
          <p>{todo.text}</p>
        </div>
      </div>
    </div>
  );
}
