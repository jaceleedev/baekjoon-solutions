// Greetings! (17548)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const hey = input[0];

const numberOfe = hey.length - 2;

console.log(`h${'e'.repeat(numberOfe * 2)}y`);
