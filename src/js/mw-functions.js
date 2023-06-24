export function hide(selector) {
  $(selector).fadeOut();
}

export function show(selector) {
  $(selector).fadeIn();
}

export function setOnKey() {
  $(window).on('keydown', function closeMw(e) {
    if (e.key === 'Escape') {
      hide($('.mw'));
      $(window).off('keydown');
    }
  });
}
