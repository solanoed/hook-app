import React from "react";

export const TodoList = ({ todo, onDelete, onToggleTodo }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between `}
      onClick={() => onToggleTodo(todo.id)}
    >
      <span className={`align-self-center user-select-none ${todo.done ? 'text-decoration-line-through':""}`}>{todo.description}</span>
      <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>
        Borrar
      </button>
    </li>
  );
};
