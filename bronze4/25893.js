// Majestic 10 (25893)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; ++i) {
  const [a, b, c] = input[i].split(' ').map(Number);

  console.log(`${a} ${b} ${c}`);

  if (a >= 10 && b >= 10 && c >= 10) {
    console.log('triple-double');
  } else if (
    (a >= 10 && b >= 10) ||
    (b >= 10 && c >= 10) ||
    (c >= 10 && a >= 10)
  ) {
    console.log('double-double');
  } else if (a >= 10 || b >= 10 || c >= 10) {
    console.log('double');
  } else {
    console.log('zilch');
  }

  console.log();
}
