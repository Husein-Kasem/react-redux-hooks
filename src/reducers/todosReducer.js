import uuid from "uuid/v4";
import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  COMPLETE_TODO,
  UNCOMPLETE_TODO,
  ADD_TODOS,
  RESET_TODOS
} from "../constants/actionTypes";

const todos = [
  {
    id: uuid(),
    title: "Gym",
    text: "Go to gym",
    image: "./assets/images/gym.png",
    completed: false
  },
  {
    id: uuid(),
    title: "Games",
    text: "Play games",
    image: "./assets/images/game.png",
    completed: false
  },
  {
    id: uuid(),
    title: "Home",
    text: "Go home",
    image: "./assets/images/home.png",
    completed: false
  }
];

const initState = {
  todos: todos
};

function todosReducer(state = initState, { type, payload }) {
  switch (type) {
    case GET_TODOS:
      return state.todos;
    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload)
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => (todo.id ? { payload } : todo))
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload ? { ...todo, completed: true } : todo
        )
      };
    case UNCOMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload ? { ...todo, completed: false } : todo
        )
      };
    case ADD_TODOS:
      return { ...state, todos: [...state.todos, ...payload] };
    case RESET_TODOS:
      return { ...state, todos: payload };
    default:
      return state;
  }
}

export default todosReducer;
