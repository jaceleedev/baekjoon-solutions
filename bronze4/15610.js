// Abbey Courtyard (15610)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const area = Number(input[0]);

const side = Math.sqrt(area);

console.log(side * 4);
