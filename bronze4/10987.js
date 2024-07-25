// 모음의 개수 (10987)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const word = input[0];

const vowels = word.match(/[aeiou]/g);

console.log(vowels ? vowels.length : 0);
