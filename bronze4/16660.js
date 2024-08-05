// Contemporary Art (16660)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const a = Number(input[0]);
const side = Math.sqrt(a);
const perimeter = side * 4;

console.log(perimeter.toFixed(8));
