// 출석 이벤트 (25704)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const p = Number(input[1]);
let answer = p;

if (n >= 20) {
  answer = Math.min(p * 0.75, p - 2000);
} else if (n >= 15) {
  answer = Math.min(p - 2000, p * 0.9);
} else if (n >= 10) {
  answer = Math.min(p * 0.9, p - 500);
} else if (n >= 5) {
  answer = p - 500;
}

if (answer < 0) {
  answer = 0;
}

console.log(answer);
