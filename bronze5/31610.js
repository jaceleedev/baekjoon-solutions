// 飴の袋詰め (Drops Packing) (31610)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

console.log(a * b + c);
