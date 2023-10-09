import './App.css';
import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';


function App() {

  // --- Hooks ---
  // todos: object
  // setTodos: add, update and delete object
  // useState(): observe variables -> when there is a change, render the page
  const [todos, setTodos] = useState([
    {id: 1, name: "Todo1", completed: true}
  ]);

  // Get the name from input
  const todoNameRef = useRef();
  // ------------

  const addTask = (e) => {
    // Add task to todoList
    const name = todoNameRef.current.value;
    // Debug
    console.log(name);

    // ...prevTodos => previous task of the List
    // add { } to prevTodos
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}]
    });

    todoNameRef.current.value = null;
  }

  return (
    <>
      To-do List App
      <TodoList todos={todos}/> {/* Componet */}
      <input type="text" ref={todoNameRef}/>
      <button onClick={addTask}>Add Task</button>
      <button>Delete completed task</button>
      <div>Number of tasks: </div>
    </>
  );
}

export default App;
