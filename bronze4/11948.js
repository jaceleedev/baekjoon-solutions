// 과목선택 (11948)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const scores = [];
let sum = 0;

for (const score of input) {
  const numScore = Number(score);

  sum += numScore;
  scores.push(numScore);
}

const min1 = Math.min(scores[0], scores[1], scores[2], scores[3]);
const min2 = Math.min(scores[4], scores[5]);

console.log(sum - min1 - min2);
