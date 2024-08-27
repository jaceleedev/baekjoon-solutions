// Counting Antibodies (24860)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [vk, jk] = input[0].split(' ').map(Number);
const [vl, jl] = input[1].split(' ').map(Number);
const [vh, dh, jh] = input[2].split(' ').map(Number);

const kCombination = vk * jk;
const lCombination = vl * jl;
const hCombination = vh * dh * jh;

const total = (kCombination + lCombination) * hCombination;

console.log(total);
