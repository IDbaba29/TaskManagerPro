
document.getElementById('taskForm').addEventListener('submit', function(event) { 

    event.preventDefault(); // prevents page load

    const title = document.getElementById('taskTitle').value; 

    const description = document.getElementById('taskDescription').value; 

    const taskForm = document.getElementById("taskForm");
    
    const taskList = document.getElementById('taskList');

    const taskTitle = document.getElementById('taskTitle').value;

    const taskDescription = document.getElementById("taskDescription").value

    if (taskTitle.trim() && taskDescription.trim()) {
        addTask(taskTitle, taskDescription);
        taskForm.reset();// clear form after submission
    }
    console.log(`Task Title: ${title}\nTask Description: ${description}`); 

}); 

function addTask(title, description) {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `c<h3>Task Title:${title}</h3>
    <p>Task Description: ${description}</p>
    <button class="delete-btn">Delete</button>`;
    taskList.appendChild(taskItem);
    // add delete functionality

    taskItem.querySelector(".delete-btn").addEventListener("click",()=>{
        taskItem.remove();
    });

}


 