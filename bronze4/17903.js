// Counting Clauses (17903)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [m, n] = input[0].split(' ').map(Number);

if (m >= 8) {
  console.log('satisfactory');
} else {
  console.log('unsatisfactory');
}
