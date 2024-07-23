// Quadrants (9772)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length; ++i) {
  const [x, y] = input[i].split(' ').map(Number);

  if (x > 0) {
    if (y > 0) {
      console.log('Q1');
    } else if (y < 0) {
      console.log(`Q4`);
    } else {
      console.log(`AXIS`);
    }
  } else if (x < 0) {
    if (y > 0) {
      console.log('Q2');
    } else if (y < 0) {
      console.log(`Q3`);
    } else {
      console.log(`AXIS`);
    }
  } else {
    console.log(`AXIS`);
  }
}
