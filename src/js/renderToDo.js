import { getElemntToDoItem } from './getElemntToDoItem';
import { setEditButton, setRemoveButton } from './setButtons';

export function renderToDo({ id, name, isDone }) {
  $('.todo-list').append(getElemntToDoItem({ id, name, isDone }));
  $('.todo-list > li:last-child').hide().fadeIn();
  setEditButton();
  setRemoveButton();
}
