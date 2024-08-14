// Rulltrappa (20867)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [m, s, g] = input[0].split(' ').map(Number);
const [a, b] = input[1].split(' ').map(Number);
const [l, r] = input[2].split(' ').map(Number);

const left = l / a + m / g;
const right = r / b + m / s;

if (left < right) {
  console.log('friskus');
} else {
  console.log('latmask');
}
