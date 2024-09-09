// Большой удой (26057)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const l = Number(input[0]);
const t = Number(input[1]);

const diff = l - t;

console.log(t - diff);
