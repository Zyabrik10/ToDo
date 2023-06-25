export function addTaskModel() {
  const li = $(`
        <li>
          <p class="mw-task-name global-p">${$('.todo-task-input')
            .val()
            .trim()}</p>
          <button class="mw-task-remove-button global-button" type="button">&times;</button>
        </li>
    `);

  $('#add-todo .mw-task-list').append(li);
  $('#add-todo .mw-task-list > li:last-child').hide().fadeIn();

  $('#add-todo .mw-task-remove-button').click(function () {
    $(this).parent().fadeOut();
    setTimeout(() => {
      $(this).parent().remove();
    }, 400);
  });
}
