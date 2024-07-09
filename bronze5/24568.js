// Cupcake Party (24568)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const r = Number(input[0]);
const s = Number(input[1]);
const totalCupcakes = r * 8 + s * 3;

console.log(totalCupcakes - 28);
