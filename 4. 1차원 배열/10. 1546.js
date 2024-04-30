const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const scores = input[1].split(' ').map(Number);

const maxScore = Math.max(...scores);
const newAvg =
  ((scores.reduce((total, score) => total + score) / maxScore) * 100) /
  scores.length;

console.log(newAvg);
