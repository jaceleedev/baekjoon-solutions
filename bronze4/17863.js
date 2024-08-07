// FYI (17863)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const digits = input[0];
const prefix = digits.slice(0, 3);

console.log(prefix === '555' ? 'YES' : 'NO');
