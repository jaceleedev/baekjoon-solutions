// Bicycle (20233)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const a = Number(input[0]);
const x = Number(input[1]);
const b = Number(input[2]);
const y = Number(input[3]);
const t = Number(input[4]);

const extra1 = t - 30 >= 0 ? (t - 30) * x : 0;
const extra2 = t - 45 >= 0 ? (t - 45) * y : 0;

const fee1 = a + extra1 * 21;
const fee2 = b + extra2 * 21;

console.log(`${fee1} ${fee2}`);
