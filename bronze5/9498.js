// 시험 성적 (9498)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const score = Number(input[0]);

console.log(
  score >= 90
    ? 'A'
    : score >= 80
    ? 'B'
    : score >= 70
    ? 'C'
    : score >= 60
    ? 'D'
    : 'F'
);
