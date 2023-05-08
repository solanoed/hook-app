import React from "react";
import { useState } from "react";
import {useForm} from "../"

export const TodoAdd = ({handleNewTodo}) => {
    const [task, setTask] = useState("Tarea Default");
    useForm
  return ( 
    <form action="">
      <input
        type="text"
        placeholder="Que hay que hacer?"
        className="form-control"
        value
      /> 
      <button type="submit" onClick={()=>handleNewTodo} className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
