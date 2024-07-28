// 팀 나누기 (13866)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const levels = input[0].split(' ').map(Number);
levels.sort((a, b) => a - b);

console.log(Math.abs(levels[0] + levels[3] - levels[1] - levels[2]));
