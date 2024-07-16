// AFC 윔블던 (4299)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [sum, diff] = input[0].split(' ').map(Number);

if (sum < diff) {
  console.log(-1);
} else {
  const a = (sum + diff) / 2;
  const b = (sum - diff) / 2;

  if (Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0) {
    console.log(`${a} ${b}`);
  } else {
    console.log(-1);
  }
}
