import { addToDoModel } from '../model/add-todo';

export function addToDoController() {
  if (
    $('#add-todo .todo-title-input').val().trim() === '' ||
    $('#add-todo .mw-task-list > li').length === 0
  )
    return;

  addToDoModel();
}
