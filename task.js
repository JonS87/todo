const tasksList = document.getElementById('tasks__list');
const tasksForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');

tasksForm.addEventListener('submit', e => {
  e.preventDefault();
  
  if (taskInput.value.length) {
    let div = document.createElement('div');
    div.className = 'task';
    let ChildDiv = document.createElement('div');
    ChildDiv.className = 'task__title';
    ChildDiv.textContent = taskInput.value;
    let ChildA = document.createElement('a');
    ChildA.href = '#';
    ChildA.className = 'task__remove';
    ChildA.textContent = '&times;';

    div.appendChild(ChildDiv);
    div.appendChild(ChildA);
    tasksList.appendChild(div);
    
    taskInput.value = null;
    
    ChildA.addEventListener('click', (e) => {
      e.preventDefault();
      
      div.remove();
    })
  }
});