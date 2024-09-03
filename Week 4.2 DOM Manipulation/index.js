function addTodo() {
    // Extract the main container
    const container = document.getElementById("container");
    console.log(container);

    // Extracting the values from the input boxes
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    // Creating 2 divs to store title and description
    const title1 = document.createElement("div");
    title1.setAttribute("class", "todo-title"); // Using class instead of id to avoid conflict
    const description1 = document.createElement("div");
    description1.setAttribute("class", "todo-description"); // Using class instead of id to avoid conflict
    const button = document.createElement("button");
    button.setAttribute("id", "button");
    const removeButton = document.createElement("button");
    removeButton.setAttribute("id", "button1");

    // Changing the inner HTML
    title1.innerHTML = title;
    description1.innerHTML = description;
    button.innerHTML = "Mark As Done";
    removeButton.innerHTML = "Remove Todo";


    console.log(title1);
    console.log(description1);

    // Append elements to the container with line breaks
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));
    container.appendChild(title1);
    container.appendChild(document.createElement("br"));
    container.appendChild(description1);
    container.appendChild(document.createElement("br"));
    container.appendChild(button);
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));
    container.appendChild(removeButton);
    container.appendChild(document.createElement("br"));

    button.addEventListener("click", () => {
        // Toggle button text between "Mark As Done" and "Done"
        if (button.innerHTML === "Mark As Done") {
            button.innerHTML = "Done";
        } else {
            button.innerHTML = "Mark As Done";
        }
    });
    
};

