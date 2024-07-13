// An Easy-Peasy Problem (30214)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [s1, s2] = input[0].split(' ').map(Number);

const isEasy = s1 * 2 >= s2;

console.log(isEasy ? 'E' : 'H');
