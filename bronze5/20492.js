// 세금 (20492)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

const firstCase = n * 0.78;
const secondCase = n - n * 0.2 * 0.22;

console.log(`${firstCase} ${secondCase}`);
