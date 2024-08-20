// Простая задача (22155)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

for (let j = 1; j <= n; ++j) {
  const [i, f] = input[j].split(' ').map(Number);

  if ((i <= 1 && f <= 2) || (i <= 2 && f <= 1)) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}
