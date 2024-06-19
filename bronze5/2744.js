// 대소문자 바꾸기 (2744)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const word = input[0];

const caseAltered = word
  .split('')
  .map((ch) => {
    if (ch.toLowerCase() === ch) {
      return ch.toUpperCase();
    } else if (ch.toUpperCase() === ch) {
      return ch.toLowerCase();
    }
  })
  .join('');

console.log(caseAltered);
