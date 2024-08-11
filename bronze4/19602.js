// Dog Treats (19602)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const s = Number(input[0]);
const m = Number(input[1]);
const l = Number(input[2]);

const total = s * 1 + m * 2 + l * 3;

console.log(total >= 10 ? 'happy' : 'sad');
