const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

if (n === 1) {
  console.log(1);
  return;
}

let layer = 1;
let maxInLayer = 1;

while (maxInLayer < n) {
  maxInLayer += 6 * layer;
  ++layer;
}

console.log(layer);
