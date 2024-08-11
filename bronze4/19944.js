// 뉴비의 기준은 뭘까? (19944)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);

if (m === 1 || m === 2) {
  console.log('NEWBIE!');
} else if (m <= n) {
  console.log('OLDBIE!');
} else {
  console.log('TLE!');
}
