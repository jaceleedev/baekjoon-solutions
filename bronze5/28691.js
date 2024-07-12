// 정보보호학부 동아리 소개 (28691)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const firstLetter = input[0];
const map = {
  M: 'MatKor',
  W: 'WiCys',
  C: 'CyKor',
  A: 'AlKor',
  $: '$clear',
};

console.log(map[firstLetter]);
