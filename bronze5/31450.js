// Everyone is a winner (31450)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [m, k] = input[0].split(' ').map(Number);

console.log(m % k === 0 ? 'Yes' : 'No');
