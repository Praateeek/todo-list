import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  

  console.log(input);
  console.log(todos);

  //Set item to local Storage
  const saveLocalTodos = (todo) => {
    
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else{
       let todoLocal = JSON.parse(localStorage.getItem('todos'));
       todoLocal.push(todo);
       localStorage.setItem('todos', JSON.stringify(todoLocal));
    }
  }

  //CREATE: Create a new todo
  function handleSubmit() {
    setTodos([...todos, input])
    
    saveLocalTodos(input)
    setInput('')
  }
  
  //UPDATE: Update the individual items in the array having index
  function updateTodo(index){
    const newTodos = [...todos];
    newTodos.splice(index, 1, input);
    setTodos(newTodos);
    setInput('');
  }

  //DELETE: Delete the individual items in the array having index
  function deleteTodo(index){
    const newTodos=[...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  //REMOVE ALL: Remove all the items in the array
  function removeAll(){
    setTodos([])
    localStorage.setItem('todos', JSON.stringify([]))
  }

  return (
    <div className="todo">
      <div className="todo-logo"><h1>Todo App</h1></div>

      <div className="todo-form">
        <form>
          <input
            type="text"
            className="task"
            name="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <input
            type="button"
            className="button"
            name="Enter"
            value="Add Todo"
            disabled={!input}
            onClick={handleSubmit}
            />
        </form>
      </div>
      
      <div className="todo-list">
        <h3>Task List</h3>
        <ul>
          {todos.map((todo) => (
            <li>{todo}
               <button
                  className='update'
                  onClick={e => updateTodo(todos.indexOf(todo))}
              >
                   Update
               </button>

               <button
                  className='delete'
                  onClick={() => deleteTodo(todos.indexOf(todo))}
                   >
                   Delete 
                </button>
            </li>
          ))}
        </ul>
      </div>
     
      <div className="todo-removal">
            <button
                className='remove'
                onClick={removeAll}
                >
                Remove All
           </button>
       </div>
    </div>
    
  

  );
  
};

export default Todo;