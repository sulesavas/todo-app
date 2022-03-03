
import React, { useState, useEffect } from 'react';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';
import { Wrapper } from './App.styles';
import { getToDos, postToDos, putToDos, deleteToDos } from './services/api';



function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await getToDos();
        setTodos(data);
      } catch (err) {
        alert(err);
      }
    };

    init();
  }, []);


  const createTodos = (todo) => {
    postToDos(todo);
    setTodos([...todos,todo]);
  }

  const updateTodos = (id) => {
    let newTodo = todos.find(todo => todo.id ===id);
    newTodo.isDone = !newTodo.isDone;
    putToDos(newTodo);
    setTodos([...todos.map(todo => todo.id === id ? newTodo : todo)]);
  }

  const deleteTodos = (id) => {
    deleteToDos(id);
    setTodos([...todos.filter(todo => todo.id !==id)]);
  }

  return (
    <Wrapper>
      <div className="card ">
        <div className="card-header text-center">
          You have {todos.length} todos
       </div>
        <div className="card-body">
          <ToDoList todos={todos} updateTodos={updateTodos} deleteTodos={deleteTodos} /> 
        </div>
        <div className="card-footer" >
          <AddToDo createTodos={createTodos} />
        </div>

      </div>
    </Wrapper>
  );
}

export default App;
