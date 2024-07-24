// Quadrilateral (10188)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; ++i) {
  const [col, row] = input[i].split(' ').map(Number);

  for (let j = 0; j < row; ++j) {
    console.log('X'.repeat(col));
  }

  console.log('');
}
