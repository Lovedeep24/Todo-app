import React, { useState } from 'react'

export default function AddTodoForm({dispatch}) 
{
    const[title,setTitle]=useState("");
    function handleSubmit(e)
    {
        e.preventDefault();
        const newTodo={
            id: crypto.randomUUID,
            title: title,
            status:false,
        };
        dispatch({type:"ADD",payload: {newTodo}})
        setTitle("");
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' name="todo-title" id='todo-title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/> <button type="submit">Add</button>
    </form> 
  );
}

