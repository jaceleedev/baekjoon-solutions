// Конвейер (28938)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const direction = input[1]
  .split(' ')
  .reduce((acc, curr) => acc + Number(curr), 0);

console.log(direction > 0 ? 'Right' : direction < 0 ? 'Left' : 'Stay');
