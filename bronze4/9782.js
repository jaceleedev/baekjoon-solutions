// Median (9782)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length; ++i) {
  const numbers = input[i].split(' ').map(Number);
  const count = numbers[0];

  if (count === 0) {
    break;
  }

  const data = numbers.slice(1);

  let median = 0;

  if (count % 2 === 1) {
    median = data[Math.floor(count / 2)];
  } else {
    median =
      (data[Math.floor(count / 2) - 1] + data[Math.floor(count / 2)]) / 2;
  }

  console.log(`Case ${i + 1}: ${median.toFixed(1)}`);
}
