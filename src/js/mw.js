import { setOnKey, show, hide } from './mw-functions';

$('.button-todo-add').click(function () {
  show($('.mw.add-todo'));
  setOnKey();
});

$('.mw.add-todo').mousedown(function (e) {
  if (e.target.classList.contains('mw')) {
    hide($('.mw.add-todo'));
    $(window).off('keydown');
  }
});
