import React from "react";
import ReactDom from 'react-dom/client'
import ToDoList from './ToDoList'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDoList></ToDoList>
  </React.StrictMode>
)
