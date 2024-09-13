import { useState} from "react";
import {GetAllTodos} from "../Components/GetAllTodos"

export function CreateTodo(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const addTodo = async() => {
        const newTodo = {title, description};
        await fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // This tells the backend you're sending JSON data
            },
            body: JSON.stringify(newTodo),
        });
        setTitle("");
        setDescription("");

    }

    //1 ->  Create New Todo Object: A newTodo object is created with the title and description values from the component state.

    //2 ->  Send POST Request: The fetch function sends a POST request to the backend URL http://localhost:3000/todo to add the new todo.

    //3 ->  Set Request Headers: The Content-Type header is set to "application/json" to indicate that the request body contains JSON data.

    //4 ->  Send Data: The newTodo object is converted to a JSON string using JSON.stringify() and included in the request body.

    //5 -> Reset Input Fields: After the request is completed, the input fields for title and description are cleared using setTitle("") and setDescription("").

    return (
        <div>
            <input type = "text" placeholder = "Todo Title" onChange = {(e) => setTitle(e.target.value)}></input><br></br><br></br>
            <input type = "text" placeholder = "Todo Description" onChange = {(e) => setDescription(e.target.value)}></input><br></br><br></br>
            <button onClick = {addTodo}>Add Todo</button>
            <GetAllTodos />
        </div>
    )
}