// 상근날드 (5543)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const burger1 = Number(input[0]);
const burger2 = Number(input[1]);
const burger3 = Number(input[2]);
const coke = Number(input[3]);
const soda = Number(input[4]);

const cheapestBurger = Math.min(burger1, burger2, burger3);
const cheapestDrink = Math.min(coke, soda);

console.log(cheapestBurger + cheapestDrink - 50);
