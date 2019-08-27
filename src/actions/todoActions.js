import {
  ADD_TODO,
  GET_TODOS,
  DELETE_TODO,
  UPDATE_TODO,
  COMPLETE_TODO,
  UNCOMPLETE_TODO,
  ADD_TODOS,
  RESET_TODOS
} from "../constants/actionTypes";

export const getTodosAction = () => ({
  type: GET_TODOS
});

export const addTodoAction = todo => ({
  type: ADD_TODO,
  payload: todo
});

export const deleteTodo = todoId => ({
  type: DELETE_TODO,
  payload: todoId
});

export const updateTodo = todo => ({
  type: UPDATE_TODO,
  payload: todo
});

export const completeTodo = todoId => ({
  type: COMPLETE_TODO,
  payload: todoId
});

export const uncompleteTodo = todoId => ({
  type: UNCOMPLETE_TODO,
  payload: todoId
});

export const addTodos = todos => ({
  type: ADD_TODOS,
  payload: todos
});

export const resetTodos = todos => ({
  type: RESET_TODOS,
  payload: todos
});
