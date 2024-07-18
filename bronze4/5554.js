// 심부름 가는 길 (5554)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let totalSeconds = 0;

for (const seconds of input) {
  totalSeconds += Number(seconds);
}

const min = Math.floor(totalSeconds / 60);
const seconds = totalSeconds % 60;

console.log(min);
console.log(seconds);
