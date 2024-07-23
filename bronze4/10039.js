// 평균 점수 (10039)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let scores = 0;

for (let i = 0; i < input.length; ++i) {
  let score = Number(input[i]);

  if (score < 40) {
    score = 40;
  }

  scores += score;
}

console.log(scores / 5);
