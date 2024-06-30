// A+B - 5 (10952)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length - 1; ++i) {
  const [a, b] = input[i].split(' ').map(Number);

  console.log(a + b);
}
