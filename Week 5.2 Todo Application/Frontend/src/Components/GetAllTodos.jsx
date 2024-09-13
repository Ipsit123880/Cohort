import {useState, useEffect} from "react";

export function GetAllTodos(){
    let [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try{
                const response = await fetch("http://localhost:3000/todos");

                const result = await response.json();

                setTodos(result.data);

            }
            catch(error){
                console.log(error);
            }
        };
        fetchTodos();
    }, [])

    // 1 -> useEffect Hook: This hook runs side effects in React after the component renders. The empty dependency array ([]) ensures that it runs only once after the component mounts.

    // 2 -> fetchTodos Function: Inside useEffect, an asynchronous function fetchTodos is defined to fetch data from the backend.

    // 3 -> try-catch Block: A try-catch block is used to handle errors that might occur during the asynchronous data fetching process.

    // 4 -> Fetch Request: Within the try block, fetch sends a GET request to http://localhost:3000/todos to retrieve all todo items.

    // 5 -> Awaiting Response: The await keyword pauses execution until the server responds. The server's response is stored in the response variable.

    // 6 -> Parsing JSON Data: The response.json() method is called to convert the raw JSON response into a JavaScript object, which is awaited and stored in result.

    // 7 -> Update State: The setTodos(result.data) call updates the todos state with the data retrieved from the server.

    // 8 -> Catch Errors: If an error occurs during the fetch process (e.g., network issues), the catch block logs the error to the console.

    // 9 -> Trigger Data Fetch: The fetchTodos() function is invoked to trigger the data fetching process immediately after component mounting.

    // 10 -> Side Effect Cleanup: Since no cleanup is required (such as aborting a fetch request), the useEffect completes its job of fetching and setting the data after the first render.


    return (
        <div>
             <ul>
                {todos.map(todo => (
                    <li key={todo._id}>
                        <h2>{todo.title}</h2>
                        <p>{todo.description}</p>
                        <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
                    </li>
                ))}
            </ul>
           
        </div>
    )
}