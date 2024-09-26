// Triangle Height (26592)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; ++i) {
  const [area, base] = input[i].split(' ').map(Number);

  const height = (area * 2) / base;

  console.log(`The height of the triangle is ${height.toFixed(2)} units`);
}
