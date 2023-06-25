import { todo_list } from './todo-list';
import { toggleToDoInfo } from './toggleToDoInfo';
import { getElemntToDoItem } from './getElemntToDoItem';
import { setEditButton, setRemoveButton } from './setButtons';

export function renderToDoList() {
  let els = '';
  for (let id in todo_list) {
    const { name, isDone } = todo_list[id];
    els += getElemntToDoItem({ name, isDone, id });
  }

  $('.todo-list').html(els);
  toggleToDoInfo();
  setEditButton();
  setRemoveButton();
}
