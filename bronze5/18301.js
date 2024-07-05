// Rats (18301)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n1, n2, n12] = input[0].split(' ').map(Number);
const n = Math.floor(((n1 + 1) * (n2 + 1)) / (n12 + 1) - 1);

console.log(n);
