document.addEventListener('DOMContentLoaded', function() {
    
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


function addTask(){
    var taskText = taskInput.value.trim().retrieve();
    if (taskText == ""){ alert("enter a task")
        ;} else {
    
       // Create a new <li> element and set its textContent to taskText
       const li = document.createElement('li');
       li.textContent = taskText;

       // Create a new button element for removing the task
       const removeBtn = document.createElement('button');
       removeBtn.classList.add('remove-btn');
       removeBtn.textContent = 'Remove';
       ul.appendChild(li);

       // Assign an onclick event to the remove button to remove the <li> element
       removeBtn.onclick = function() {
         li.remove();
       }
    
    // Add an event listener to the Add Task button
    
    addButton.addEventListener('click', addTask);

    // Add an event listener to the task input for the 'keypress' event
    
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
         } })
    
    
        }
    
}



document.addEventListener('DOMContentLoaded', function() {
    addTask();
  });





  })