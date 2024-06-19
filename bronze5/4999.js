// 아! (4999)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const patient = input[0].length;
const doctor = input[1].length;

console.log(doctor <= patient ? 'go' : 'no');
