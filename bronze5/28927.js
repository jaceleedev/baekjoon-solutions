// Киноманы (28927)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [t1, e1, f1] = input[0].split(' ').map(Number);
const [t2, e2, f2] = input[1].split(' ').map(Number);

const max = t1 * 3 + e1 * 20 + f1 * 120;
const mel = t2 * 3 + e2 * 20 + f2 * 120;

console.log(max > mel ? 'Max' : max < mel ? 'Mel' : 'Draw');
