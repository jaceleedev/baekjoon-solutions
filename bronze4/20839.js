// Betygsättning (20839)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [x, y, z] = input[0].split(' ').map(Number);
const [xMet, yMet, zMet] = input[1].split(' ').map(Number);

if (zMet === z) {
  if (yMet === y) {
    if (xMet === x) {
      console.log('A');
    } else if (xMet >= Math.ceil(x / 2)) {
      console.log('B');
    } else {
      console.log('C');
    }
  } else if (yMet >= Math.ceil(y / 2)) {
    console.log('D');
  } else {
    console.log('E');
  }
} else {
  console.log('E');
}
