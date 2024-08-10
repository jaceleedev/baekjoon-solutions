// HOMWRK (18398)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const t = Number(input[0]);
let index = 1;
let cases = 0;

while (true) {
  if (cases === t) {
    break;
  }

  const n = Number(input[index++]);

  for (let i = 0; i < n; ++i) {
    const [a, b] = input[index++].split(' ').map(Number);
    console.log(`${a + b} ${a * b}`);
  }

  ++cases;
}
