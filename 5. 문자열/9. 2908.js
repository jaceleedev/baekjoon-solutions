const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, b] = input[0].split(' ');

const reversedA = Number(a.split('').reverse().join(''));
const reversedB = Number(b.split('').reverse().join(''));

const answer = reversedA > reversedB ? reversedA : reversedB;

console.log(answer);
