// 팬들에게 둘러싸인 홍준 (14581)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const id = input[0];

console.log(':fan::fan::fan:');
console.log(`:fan::${id}::fan:`);
console.log(':fan::fan::fan:');
