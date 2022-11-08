import React from 'react'
import ReactDOM from 'react-dom/client'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './03-Examples/MultipleCustomHooks'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <MultipleCustomHooks />
  // <React.StrictMode>
  // </React.StrictMode>
)
