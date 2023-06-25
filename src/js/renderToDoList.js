import { todo_list } from './todo-list';
import { toggleToDoInfo } from './toggleToDoInfo';
import { getElemntToDoItem } from './getElemntToDoItem';
import { setEditButton, setRemoveButton } from './setButtons';

export function renderToDoList() {
  let els = '',
    q = 0;
  for (let id in todo_list) {
    const { name, isDone } = todo_list[id];
    els += getElemntToDoItem({ name, isDone, id, q });
    q += 1;
  }

  $('.todo-list').html(els);
  toggleToDoInfo();
  setEditButton();
  setRemoveButton();
}
