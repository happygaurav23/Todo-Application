let todos = [];

let addTaskContainer = document.getElementById('add-task');

addTaskContainer.classList.add('d-none');

function addTask(){

    let taskInput = document.getElementById('taskInput');
    let dateInput = document.getElementById('dateInput');
    let todoObject = {
        task:taskInput.value,
        dueDate:dateInput.value
    }
    todos.push(todoObject);
    addTaskContainer.classList.add('d-none');
    console.log(todos);

}

function displayAddTask(){
    addTaskContainer.classList.remove('d-none');

}