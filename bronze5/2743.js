// 단어 길이 재기 (2743)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const word = input[0];

console.log(word.length);
