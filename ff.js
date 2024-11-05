
const addButton = document.querySelector('.add');
const clearButton = document.querySelector('.clear');
const taskInput = document.querySelector('.task-input');
const taskContainer = document.querySelector('.container');

  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    taskTextElement.classList.toggle('checked', checkbox.checked);
  });

  
  const taskTextElement = document.createElement('span');
  taskTextElement.textContent = taskText;

  
  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('fas', 'fa-trash');
  deleteIcon.addEventListener('click', () => {
    taskContainer.removeChild(taskDiv); 
  });

  
  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(taskTextElement);
  taskDiv.appendChild(deleteIcon);

  return taskDiv;



addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskElement = createTaskElement(taskText);
    taskContainer.appendChild(taskElement);
    taskInput.value = '';
  }
});


clearButton.addEventListener('click', () => {
  taskContainer.innerHTML = ''; 
});
