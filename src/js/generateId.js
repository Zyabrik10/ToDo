export function generateId() {
  return [...new Array(3).keys()].map(() => randInt(0, 9)).join('');
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
