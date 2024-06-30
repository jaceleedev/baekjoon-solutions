// A+B - 4 (10951)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (const element of input) {
  const [a, b] = element.split(' ').map(Number);

  console.log(a + b);
}
