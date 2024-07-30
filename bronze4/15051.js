// Máquina de café (15051)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const a1 = Number(input[0]);
const a2 = Number(input[1]);
const a3 = Number(input[2]);

const time1 = a2 * 2 + a3 * 4;
const time2 = a1 * 2 + a3 * 2;
const time3 = a1 * 4 + a2 * 2;

console.log(Math.min(time1, time2, time3));
