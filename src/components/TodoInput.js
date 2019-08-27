import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../actions/todoActions";
import uuid from "uuid/v4";

const TodoInput = () => {
  const [todoText, setTodoText] = useState("");
  const [todoTitle, setTodoTitle] = useState("");
  const dispatch = useDispatch();

  const onchangeTitle = event => {
    setTodoTitle(event.target.value);
  };

  const onchangeText = event => {
    setTodoText(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (todoTitle.trim() === "" || todoText.trim() === "")
      return alert("Each todo must have a title and a text.");
    dispatch(
      addTodoAction({
        id: uuid(),
        title: todoTitle,
        text: todoText,
        completed: false,
        image: "./assets/images/default-todo.png"
      })
    );
    setTodoText("");
    setTodoTitle("");
  };
  return (
    <div className="row">
      <form onSubmit={onSubmit}>
        <div className="input-field col s4">
          <input
            id="title"
            type="text"
            className="validate"
            value={todoTitle}
            onChange={onchangeTitle}
          />
          <label htmlFor="title">Title</label>
          <span className="helper-text" data-error="wrong" data-success="right">
            The title of the TODO
          </span>
        </div>
        <div className="input-field col s5">
          <input
            id="text"
            type="text"
            className="validate"
            value={todoText}
            onChange={onchangeText}
          />
          <label htmlFor="text">Text</label>
          <span className="helper-text" data-error="wrong" data-success="right">
            The text of the TODO
          </span>
        </div>
        <div className="input-field col s3">
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Add
            <i className="material-icons right">add_circle_outline</i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
