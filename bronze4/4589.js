// Gnome Sequencing (4589)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

console.log('Gnomes:');

for (let i = 1; i <= n; ++i) {
  const [a, b, c] = input[i].split(' ').map(Number);

  if ((a <= b && b <= c) || (a >= b && b >= c)) {
    console.log('Ordered');
  } else {
    console.log('Unordered');
  }
}
