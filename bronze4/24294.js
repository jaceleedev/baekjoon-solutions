// ГРАДИНА (24294)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const w1 = Number(input[0]);
const h1 = Number(input[1]);
const w2 = Number(input[2]);
const h2 = Number(input[3]);

const maxW = Math.max(w1, w2);

const perimeter = 2 * (maxW + h1 + h2) + 4;

console.log(perimeter);
