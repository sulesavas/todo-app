import React,{useState} from 'react';


function AddToDo({createTodos}) {

    const [newTodo, setNewTodo] = useState({title:'',user:'sulesavas',isDone:false});

    const changeHandler = (value) => {
        setNewTodo({
            ...newTodo,
            title:value
        })
    }

    const buttonHandler=()=>{
        if(newTodo.title!=='')
        {
            createTodos(newTodo);
            changeHandler('');  
        }

    }

    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Enter Item" value={newTodo.title} 
            onChange={(event)=> changeHandler(event.target.value)}/>
            <div className="input-group-append ml-2">
              <button className="btn btn-outline-secondary" type="button" onClick={()=>buttonHandler()} >Submit</button>
            </div>
            </div>
    )
}

export default AddToDo
