// Darius님 한타 안 함? (20499)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [k, d, a] = input[0].split('/').map(Number);

console.log(k + a < d || d === 0 ? 'hasu' : 'gosu');
