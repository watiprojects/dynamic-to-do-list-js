document.addEventListener('DOMContentLoaded', function(){

    //select DOM elements
    const addButton = document.getElementById("add-task-btn");
    
    const taskInput = document.getElementById("task-input");

    const taskList = document.getElementById("task-list");

    //Create the addTask Function

    function addTask() {
        //get the input and remove white spaces
        const taskText = taskInput.value.trim();

        if(taskText !== ""){
            //create new list item and add text
            const newItem = document.createElement('li')
            newItem.textContent = taskText;
            

            //add delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = "Remove";
            deleteButton.classList.add('remove-btn');
            deleteButton.addEventListener('click', function() {
                newItem.remove();
            });
        
            //add the remove button to the new item
            newItem.appendChild(deleteButton);

            //add new list item to the task list
            taskList.appendChild(newItem);

            taskInput.value = "";

        } else {
            alert("Please enter a task");
        }

    }

    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function(event){
        if(event.key === 'Enter'){
            addTask();
        }
    });

});