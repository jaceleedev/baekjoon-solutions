// Bottle Return (21300)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const containers = input[0].split(' ').map(Number);

const totalRefund = containers.reduce((acc, curr) => acc + curr) * 5;

console.log(totalRefund);
