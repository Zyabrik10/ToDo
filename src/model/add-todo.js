import { addToDoToList } from '../js/todo-list-functions';
import { generateId } from '../js/generateId';
import { renderToDo } from '../js/renderToDo';
import { toggleToDoInfo } from '../js/toggleToDoInfo';

export function addToDoModel() {
  const name = $('.todo-title-input').val().trim();
  const task_list = Array.from($('.mw-added-task-list > li')).map(
    (e, index) => {
      return {
        id: index,
        isDone: false,
        text: e.querySelector('.mw-task-name').innerText.trim(),
      };
    }
  );

  const obj = {
    name,
    task_list,
    id: generateId(),
    isDone: false,
  };

  addToDoToList(obj);
  renderToDo(obj);
  toggleToDoInfo();
}
