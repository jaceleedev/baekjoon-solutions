// Rain Diary (27182)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);

if (n > 7) {
  console.log(n - 7);
} else {
  console.log(m + 7);
}
