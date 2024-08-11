// Cutting Corners (20215)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [w, h] = input[0].split(' ').map(Number);
const d = Math.sqrt(w ** 2 + h ** 2);

console.log(w + h - d);
