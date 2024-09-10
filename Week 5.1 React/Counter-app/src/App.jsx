/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// import './App.css'
import { useState } from "react";

function App() {
  let [todos, setTodos] = useState([
      {
        title : "GYM",
        description : "Go to gym from 6 to 8"
      },
      {
        title : "Study LinkedList",
        description : "Study LinkedList from 9 to 12"
      },
    ]
  );
  function AddTodo(){
    setTodos([...todos, {
      title : "Add a new Randon Todo",
      description : "Go to sleep"
    }])
  
  }

  return (
    <div>
      <button onClick = {AddTodo}>Add a new Randon Todo</button>
      {/* {Todos.map(function(Todos))} */}
      {todos.map(function(todo) {
        return (
          <Todo title = {todo.title} description = {todo.description}/>
        )
      })}
    </div>
  )
}




function Todo(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}

export default App;
