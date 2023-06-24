import { todo_list } from '../js/todo-list';

export function saveToDoList() {
  localStorage.setItem('todo-list', JSON.stringify(todo_list));
}

export function addToDoToList({ id, name, task_list, isDone }) {
  todo_list[id] = {
    name,
    task_list,
    isDone,
  };
  saveToDoList();
}

export function removeFromToDoList(id) {
  delete todo_list[id];
  saveToDoList();
}
