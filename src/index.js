document.addEventListener("DOMContentLoaded", () => {
  let taskList = new TaskList([])
  const listContainer = document.getElementById("list");
  const renderApp = () => (listContainer.innerHTML = taskList.render());
  const taskForm = document.getElementById('create-task-form')
  taskForm.addEventListener('submit', (e) => {
    // Add Form Behavior Here!
    e.preventDefault()
    let taskItem = new TaskListItem(e.target[0].value)
    taskList.addItem(taskItem)
    renderApp()
    taskForm.reset()
  })
})