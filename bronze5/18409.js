// 母音を数える (Counting Vowels) (18409)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const s = input[1];

const noVowels = s.replace(/[aiueo]/g, '');

console.log(s.length - noVowels.length);
