// Who is in the middle? (6840)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const bowls = [];

for (let i = 0; i < input.length; ++i) {
  const bowl = Number(input[i]);
  bowls.push(bowl);
}

bowls.sort((a, b) => a - b);

console.log(bowls[1]);
