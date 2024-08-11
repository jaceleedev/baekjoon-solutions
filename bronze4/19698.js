// 헛간 청약 (19698)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, w, h, l] = input[0].split(' ').map(Number);

const max = Math.floor(w / l) * Math.floor(h / l);

console.log(Math.min(max, n));
