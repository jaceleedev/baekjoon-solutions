// SciComLove (21598)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

for (let i = 0; i < n; ++i) {
  console.log(`SciComLove`);
}
