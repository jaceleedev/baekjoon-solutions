// Piece of Cake! (17874)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, h, v] = input[0].split(' ').map(Number);

const topLeft = h * v;
const topRight = h * (n - v);
const bottomLeft = (n - h) * v;
const bottomRight = (n - h) * (n - v);

const maxPieceArea = Math.max(topLeft, topRight, bottomLeft, bottomRight);
const maxVolume = maxPieceArea * 4;

console.log(maxVolume);
