import React, { useReducer } from 'react'
// import Todo from './Todo';
import Todos from './Todos';
import AddTodoForm from './AddTodoForm';

const initialTodo=[
    {id:"1",title:"Task A", status: true},
    {id:"2",title:"Task B", status: true},
    {id:"3",title:"Task C", status: false},
  ];
   function reducer(todos,action)
    {
      if(action.type === "DELETE")
      {
        return todos.filter(todo=>todo.id !== action.payload.id)
      }
      if(action.type === "TOGGLE")
      {
          return todos.map((todo)=>{
            if(todo.id === action.payload.id)
            {
              return{...todo, status: !todo.status};
            }
            else
            {
              return {...todo};
            }
          });
      }
      if(action.type === "ADD")
      {
        return[...todos, action.payload.newTodo]
      }
        return todos;
    }
    

export default function TodoApp() {
    const[todos,dispatch]=useReducer(reducer,initialTodo)
  return (
    <div>
      <AddTodoForm dispatch={dispatch}/>
      <Todos todos={todos} dispatch={dispatch} />
    </div>
  )
}
