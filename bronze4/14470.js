// 전자레인지 (14470)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);
const d = Number(input[3]);
const e = Number(input[4]);

let time = 0;

if (a < 0) {
  time += c * Math.abs(a);
  time += d;
  time += e * b;
} else {
  time += e * (b - a);
}

console.log(time);
