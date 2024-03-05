import React from 'react'
import Styles from "./Todo.module.css"
export default function Todo({id,title,status,dispatch}) {
  return (
    <div className={Styles.todo}>
      <p>id: {id}</p>
      <p>title: {title}</p>
      <p>status: {status? "true" : "false"}</p>
      <button onClick={()=>dispatch({type:"DELETE",payload:{id:id}})}>Delete</button>
      <button>Toggle</button>
    </div>
  );
}
