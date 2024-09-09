// Lots of Liquid (25991)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const containers = input[1].split(' ').map(Number);
let total = 0;

for (const container of containers) {
  total += Math.pow(container, 3);
}

const answer = Math.cbrt(total);

console.log(answer.toFixed(6));
