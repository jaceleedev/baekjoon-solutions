// Äpplen och päron (21354)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, p] = input[0].split(' ').map(Number);

const axel = a * 7;
const petra = p * 13;

console.log(axel > petra ? 'Axel' : axel < petra ? 'Petra' : 'lika');
