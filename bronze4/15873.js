// 공백 없는 A+B (15873)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const length = input[0].length;

for (let i = 1; i <= length; ++i) {
  const part1 = input[0].substring(0, i);
  const part2 = input[0].substring(i);

  if (part1.startsWith('0') || part2.startsWith('0')) {
    continue;
  }

  const a = Number(part1);
  const b = Number(part2);

  if (a <= 10 && b <= 10) {
    console.log(a + b);
    break;
  }
}
