import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        
        <>
        <div>
           <h4>{todo.title}</h4>
           <p>{todo.desc}</p>
           <p>{todo.dateTime}</p>
           <button className="btn my-2 btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
        </div>
        <hr/> 
        </>
    )
}
