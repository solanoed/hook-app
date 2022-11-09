import React, { useState } from 'react'
import { useCounter } from '../Hooks'

export const MemoHook = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true)



  return (
    <>
        <h1>Counter: <small>{counter}</small> </h1>
        <button className="btn btn-primary" onClick={ ()=>increment() }>+1</button>
        <button className='btn btn-outline-primary mr-2' onClick={()=>setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
    </>
  )
}
