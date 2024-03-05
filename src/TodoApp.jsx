import React, { useReducer } from 'react'
// import Todo from './Todo';
import Todos from './Todos';

const initialTodo=[
    {id:"1",title:"Task A",status:true},
    {id:"2",title:"Task B",status:true},
    {id:"3",title:"Task C",status:true},
  ];
   function reducer(todos,action)
    {
      if(action.type === "DELETE")
      {
        return todos.filter(todo=>todo.id !== action.payload.id)
      }
        return todos;
    }
    

export default function TodoApp() {
    const[todos,dispatch]=useReducer(reducer,initialTodo)
  return (
    <div>
      <Todos todos={todos} dispatch={dispatch} />
    </div>
  )
}
