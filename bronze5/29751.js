// 삼각형 (29751)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [w, h] = input[0].split(' ').map(Number);

console.log(((w * h) / 2).toFixed(1));
