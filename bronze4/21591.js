// Laptop Sticker (21591)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [wc, hc, ws, hs] = input[0].split(' ').map(Number);

const availableWidth = wc - 2;
const availableHeight = hc - 2;

if (availableWidth >= ws && availableHeight >= hs) {
  console.log(1);
} else {
  console.log(0);
}
