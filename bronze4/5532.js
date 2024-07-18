// 방학 숙제 (5532)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const l = Number(input[0]);
const a = Number(input[1]);
const b = Number(input[2]);
const c = Number(input[3]);
const d = Number(input[4]);

const homeworkDay = Math.max(Math.ceil(a / c), Math.ceil(b / d));

console.log(l - homeworkDay);
