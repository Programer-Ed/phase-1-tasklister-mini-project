



document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTaskDescription = document.getElementById('new-task-description').value;
    const priority = document.getElementById('priority').value;
    const taskItem = createTaskItem(newTaskDescription, priority);
    taskList.appendChild(taskItem);
    sortTasks();
    taskForm.reset();
  });

  function createTaskItem(description, priority) {
    const taskItem = document.createElement('li');
    taskItem.textContent = description;
    taskItem.dataset.priority = priority;

    if (priority === 'high') {
      taskItem.style.color = 'red';
    } else if (priority === 'medium') {
      taskItem.style.color = 'orange';
    } else if (priority === 'low') {
      taskItem.style.color = 'green';
    }

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);
    return taskItem;
  }

  function sortTasks() {
    const tasks = Array.from(taskList.children);
    tasks.sort((a, b) => {
      const priorityOrder = { high: 1, medium: 2, low: 3 };
      return priorityOrder[a.dataset.priority] - priorityOrder[b.dataset.priority];
    });

    taskList.innerHTML = '';
    tasks.forEach(task => taskList.appendChild(task));
  }
});
































 
// // function deleteItem(e){
// //      e.target.parentNode.remove()
// // }

// // OO solution
// document.addEventListener("DOMContentLoaded", () => {
//   // initialize taskList class
//   const taskList = new TaskList();
//   //grab all the necessary DOM elements

//   //form and relevant input fields
//   const newTaskForm = document.getElementById("create-task-form");
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTaskPriority = document.getElementById("new-task-priority");

//   //ul where new tasks will live on the DOM
//   const taskUl = document.getElementById("tasks");

//   const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());
//   //attach event listeners

//   newTaskForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     taskList.createNewTask(newTaskDescription.value);
//     // reset form
//     e.target.reset();
//     renderApp();
//   });

//   taskUl.addEventListener("click", (e) => {
//     if (e.target.nodeName === "BUTTON") {
//       taskList.deleteTask(e.target.dataset.description);
//       renderApp();
//     }
//   });
// });
// class TaskList {
//   constructor() {
//     this.tasks = [];
//   }

//   createNewTask(description) {
//     const newTask = new Task(description);
//     this.tasks.push(newTask);
//   }

//   renderTasks() {
//     return this.tasks.map((task) => task.render()).join("");
//   }

//   deleteTask(description) {
//     this.tasks = this.tasks.filter((task) => task.description !== description);
//   }
// }