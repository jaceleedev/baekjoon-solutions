// 身長 (Height) (24086)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const a = Number(input[0]);
const b = Number(input[1]);

console.log(b - a);
