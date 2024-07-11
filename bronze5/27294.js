// 몇개고? (27294)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [t, s] = input[0].split(' ').map(Number);

const isLunchTime = t >= 12 && t <= 16;
const withDrink = s === 1;

if (withDrink || !isLunchTime) {
  console.log(280);
} else if (isLunchTime && !withDrink) {
  console.log(320);
}
