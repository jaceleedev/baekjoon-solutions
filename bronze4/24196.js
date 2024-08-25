// Gömda ord (24196)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const encrypted = input[0];
let decrypted = '';
let i = 0;

while (i < encrypted.length) {
  decrypted += encrypted[i];
  i += encrypted.charCodeAt(i) - 65 + 1;
}

console.log(decrypted);
