// 試験 (Exam) (18411)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const scores = input[0].split(' ').map(Number);
scores.sort((a, b) => b - a);

console.log(scores[0] + scores[1]);
