// 폰 노이만과 파리 (14924)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [s, t, d] = input[0].split(' ').map(Number);

console.log(t * (d / (s * 2)));
