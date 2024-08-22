// 移動 (Moving) (24079)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const x = Number(input[0]);
const y = Number(input[1]);
const z = Number(input[2]);

console.log(x + y <= z + 0.5 ? 1 : 0);
