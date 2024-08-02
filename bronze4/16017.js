// Telemarketer or not? (16017)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const first = Number(input[0]);
const second = Number(input[1]);
const third = Number(input[2]);
const fourth = Number(input[3]);

if (
  (first === 8 || first === 9) &&
  (fourth === 8 || fourth === 9) &&
  second === third
) {
  console.log('ignore');
} else {
  console.log('answer');
}
