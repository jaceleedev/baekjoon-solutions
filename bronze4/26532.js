// Acres (26532)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [width, height] = input[0].split(' ').map(Number);
const total = width * height;

const acres = total / 4840;

console.log(Math.ceil(acres / 5));
