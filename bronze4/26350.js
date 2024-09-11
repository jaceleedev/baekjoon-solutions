// Good Coin Denomination (26350)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; ++i) {
  const v = input[i].split(' ').map(Number);
  const d = v[0];
  const coins = v.slice(1);
  let message = 'Good coin denominations!';

  for (let j = 0; j < d - 1; ++j) {
    if (coins[j + 1] < coins[j] * 2) {
      message = 'Bad coin denominations!';
      break;
    }
  }

  console.log(`Denominations: ${coins.join(' ')}`);
  console.log(message);
  console.log();
}
