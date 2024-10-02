// Шахматная доска (27239)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

const column = String.fromCharCode('a'.charCodeAt(0) + ((n - 1) % 8));
const row = Math.floor((n - 1) / 8) + 1;

console.log(column + row);
