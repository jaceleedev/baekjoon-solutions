// 카드 게임 (5522)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const scores = [];

for (let i = 0; i < input.length; ++i) {
  const score = Number(input[i]);
  scores.push(score);
}

const totalScore = scores.reduce((acc, curr) => acc + curr, 0);

console.log(totalScore);
