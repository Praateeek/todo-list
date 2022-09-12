import React, { useState } from "react";
import "./TodoFirebase.css";
//import firebase files
import firebase from "firebase";
import db from './firebase';

const TodoFirebase = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState('');
  //const 
  

  console.log(input);
  console.log(todos);

//   //CREATE: Create a new todo
function handleSubmit(){
    db.collection('todo').add({
        timestamp: firebase.firestore.FileValue.serverTimestamp(),
        todo: input
    })
    setTodos([...todos, input]);
    setInput('')

}

  
//   //UPDATE: Update the individual items in the array having index
function updateTodo(){

}


//   //DELETE: Delete the individual items in the array having index
function deleteTodo(){

}


//   //REMOVE ALL: Remove all the items in the array
function removeAll(){

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

export default TodoFirebase;