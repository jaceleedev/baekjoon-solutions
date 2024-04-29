function displayMultiplicationTable(n) {
  let multiplicationTable = '';

  for (let i = 1; i <= 9; ++i) {
    multiplicationTable += `${n} * ${i} = ${n * i}\n`;
  }

  return multiplicationTable.slice(0, -1);
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);

console.log(displayMultiplicationTable(n));
