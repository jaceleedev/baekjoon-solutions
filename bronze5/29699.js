// Welcome to SMUPC! (29699)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const label = 'WelcomeToSMUPC';
const position = (n - 1) % label.length;

console.log(label[position]);
