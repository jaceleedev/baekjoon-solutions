// 달달함이 넘쳐흘러 (17256)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [ax, ay, az] = input[0].split(' ').map(Number);
const [cx, cy, cz] = input[1].split(' ').map(Number);

const bx = cx - az;
const by = cy / ay;
const bz = cz - ax;

console.log(`${bx} ${by} ${bz}`);
