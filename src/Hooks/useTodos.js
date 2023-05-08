import { useEffect } from "react";
import { todoReducer } from "../08-02-UseReducer/todoReducer";
import { useReducer } from "react";

export const useTodos = () => {

  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos") || []);
  };

  
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  const countTodos = todos.length;
  const pendingTodos = todos.filter((element) => element.done == false).length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: id,
    };
    dispatch(action);
  };
  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: id,
    };
    dispatch(action);
  };
  return {
    todos,
    countTodos,
    pendingTodos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  };
};
