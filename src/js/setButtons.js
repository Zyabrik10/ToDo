import { removeFromToDoList, saveToDoList } from './todo-list-functions';
import { toggleToDoInfo } from './toggleToDoInfo';
import { todo_list } from './todo-list';
import { renderToDoList } from './renderToDoList';
import { show, hide, setOnKey } from './mw-functions';

export function setRemoveButton() {
  $('.remove-todo-button').click(function () {
    removeFromToDoList($(this).attr('data-id'));
    toggleToDoInfo();
    $(this).parent().parent().parent().fadeOut();
  });
}

export function setEditButton() {
  $('.edit-todo-button').click(function () {
    const id = $(this).attr('data-id');

    const { name, task_list } = todo_list[$(this).attr('data-id')];
    show($('.mw.edit-todo'));
    setOnKey();

    $('.mw.mw.edit-todo').mousedown(function (e) {
      if (e.target.classList.contains('mw')) {
        hide($('.mw.mw.edit-todo'));
        $(window).off('keydown');
      }
    });

    $('.mw-edit-title').text(name);
    let tasks = task_list.map(({ text, isDone, id }) => {
      return `
        <li>
          <p class="mw-task-name global-p">${text}</p>
          <input class="mw-task-toggle-button global-button" type="checkbox" ${
            isDone ? 'checked' : ''
          } data-id="${id}">
        </li>
      `;
    });
    $('.edit-todo .mw-task-list').html(tasks);

    $('.mw-task-toggle-button').change(function () {
      const button_id = Number($(this).attr('data-id'));

      todo_list[id].task_list[button_id].isDone =
        !todo_list[id].task_list[button_id].isDone;

      if (todo_list[id].task_list.every(e => e.isDone))
        todo_list[id].isDone = true;
      else todo_list[id].isDone = false;

      $('.todo-list').html('');
      saveToDoList();
      renderToDoList();
    });

    $('.edit-todo .todo-title-input').on('input', function () {
      todo_list[id].name = $(this).val().trim();
      $('.todo-list').html('');
      saveToDoList();
      renderToDoList();
    });
  });
}
