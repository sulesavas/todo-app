import React from 'react';

function ToDoList({todos,updateTodos, deleteTodos}) {
    return (
        <ul className="list-group list-group-flush">
            {todos.map(toDo=>{
                return (
                    <li className="list-group-item">
                <input type="checkbox" class="form-check-input" checked={toDo.isDone} onChange={()=>updateTodos(toDo.id)}/>
                {toDo.title}
                <span className="badge badge-success ml-2">{toDo.user}</span>
                <button type="button" class="btn btn-sm btn-xs btn-outline-danger float-right" onClick={()=>deleteTodos(toDo.id)}>X</button>
            </li>
                )

            })}
            
          </ul>

    )
}

export default ToDoList
