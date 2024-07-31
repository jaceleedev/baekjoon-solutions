// Hard choice (15059)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [ca, ba, pa] = input[0].split(' ').map(Number);
const [cr, br, pr] = input[1].split(' ').map(Number);

const diffC = Math.max(0, cr - ca);
const diffB = Math.max(0, br - ba);
const diffP = Math.max(0, pr - pa);

console.log(diffC + diffB + diffP);
