import React, { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({ 
    username: "",
     email: "" 
    });

    const {username,email} = formState;

    const onInputChange = ({target}) =>{
        const {name,value} = target;
        setFormState({
            ...formState,
            [name]:value
        })
    }
    useEffect(() => {
      console.log("Use Effect Called")
    },[])
    useEffect(() => {
      console.log("email changed")
    },[email])
    useEffect(() => {
      console.log("name changed")
    },[username])
    
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
    </>
  );
};
