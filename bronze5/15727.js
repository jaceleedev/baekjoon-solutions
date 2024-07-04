// 조별과제를 하려는데 조장이 사라졌다 (15727)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const l = Number(input[0]);

console.log(Math.ceil(l / 5));
