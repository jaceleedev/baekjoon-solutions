// Shipping (26530)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
let index = 1;

for (let i = 0; i < n; ++i) {
  const x = Number(input[index++]);

  let total = 0;

  for (let j = 0; j < x; ++j) {
    const [item, quantity, price] = input[index++].split(' ');

    total += Number(quantity) * Number(price);
  }

  console.log(`$${total.toFixed(2)}`);
}
