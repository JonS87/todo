const tasksList = document.getElementById('tasks__list');
const tasksForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');

tasksForm.addEventListener('submit', e => {
  e.preventDefault();
  
  if (taskInput.value.length) {
    tasksList.insertAdjacentHTML('afterbegin', `
    <div class='task'>
      <div class='task__title'>
        ${taskInput.value}
      </div>
      <a href='#' class='task__remove'>&times;</a>
    </div>
    `);

    taskInput.value = null;
    
    const removeButton = tasksList.getElementsByClassName('task__remove')[0];
    const removeDiv = tasksList.getElementsByClassName('task')[0];
    removeButton.addEventListener('click', (e) => {
      e.preventDefault();
      
      removeDiv.remove();
    })
  }
});