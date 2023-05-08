import React from "react";
import { TodoList } from "./Components/TodoList";
import { TodoAdd } from "./Components/TodoAdd";
import { useTodos } from "../Hooks/useTodos";


export const TodoApp = () => {
    
   const {todos,countTodos, pendingTodos, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodos();
  return (
    <>
      <h1>
        TodoApp ({countTodos})
        <small>
          Pendientes: {pendingTodos}
        </small>
      </h1>
      <hr />

      <div className="row">
        
        <div className="col-7">
          <ul className="list-group">
            {todos.map((todo) => {
              return (

                <TodoList
                  key={todo.id}
                  todo={todo}
                  onDelete={handleDeleteTodo}
                  onToggleTodo={handleToggleTodo}
                />

              );
            })}
          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <TodoAdd onNewTodo={handleNewTodo} />

        </div>
      </div>
    </>
  );
};
