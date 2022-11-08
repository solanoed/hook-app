import React, { useEffect, useState } from "react";
import { useForm } from "../Hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

  const {formState,onInputChange,username,email,password,onResetForm} =  useForm({ 
    username: "",
     email: "" ,
     password:""
    }
    )
  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="dacrensolano@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button onClick={()=>onResetForm()} className='btn btn-primary mt-2' >Borrar</button>
      {
        (username === 'Enrique') && <Message />
      }
    </>
  );
};
