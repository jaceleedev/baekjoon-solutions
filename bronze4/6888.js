// Terms of Office (6888)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const x = Number(input[0]);
const y = Number(input[1]);

for (let i = x; i <= y; i += 60) {
  console.log(`All positions change in year ${i}`);
}
