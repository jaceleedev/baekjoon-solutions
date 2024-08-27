// 가희와 방어율 무시 (25238)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [a, b] = input[0].split(' ').map(Number);

if (a < 100) {
  console.log(1);
} else {
  const armor = a - a * (b / 100);

  if (armor < 100) {
    console.log(1);
  } else {
    console.log(0);
  }
}
