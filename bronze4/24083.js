// 短針 (Hour Hand) (24083)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const a = Number(input[0]);
const b = Number(input[1]);

console.log((a + b) % 12 === 0 ? 12 : (a + b) % 12);
