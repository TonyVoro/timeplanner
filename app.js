const taskForm = document.getElementById('task-form');
const taskTable = document.getElementById('task-table').getElementsByTagName('tbody')[0];

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskName = document.getElementById('task-name').value;
  const dueDate = document.getElementById('due-date').value;

  const newRow = taskTable.insertRow();

  const nameCell = newRow.insertCell(0);
  nameCell.textContent = taskName;

  const dateCell = newRow.insertCell(1);
  dateCell.textContent = dueDate;
  
  taskForm.reset();
});