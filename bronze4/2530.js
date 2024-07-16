// 인공지능 시계 (2530)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, b, c] = input[0].split(' ').map(Number);
const d = Number(input[1]);

let totalSeconds = a * 3600 + b * 60 + c + d;

const h = Math.floor(totalSeconds / (60 * 60)) % 24;
totalSeconds %= 60 * 60;
const m = Math.floor(totalSeconds / 60);
const s = totalSeconds % 60;

console.log(`${h} ${m} ${s}`);
