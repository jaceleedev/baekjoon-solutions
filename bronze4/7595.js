// Triangles (7595)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length - 1; ++i) {
  const n = Number(input[i]);

  for (let j = 1; j <= n; ++j) {
    console.log(`*`.repeat(j));
  }
}
