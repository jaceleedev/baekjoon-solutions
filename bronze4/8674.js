// Tabliczka (8674)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let [a, b] = input[0].split(' ').map(BigInt);

// 정석적인 문제풀이
/*

if (a < b) {
  const temp = a;
  a = b;
  b = temp;
}

const vHalf1 = divideByTwo(a);
const vHalf2 = a - vHalf1;
const hHalf1 = divideByTwo(b);
const hHalf2 = b - hHalf1;

const vDiff = vHalf1 - vHalf2;
const hDiff = hHalf1 - hHalf2;

if (vDiff === 0n || hDiff === 0n) {
  console.log(0);
} else {
  console.log(b.toString());
}

function divideByTwo(number) {
  if (number % 2n === 0) {
    return number / 2n;
  }

  return (number + 1n) / 2n;
}
*/

// 수학을 이용한 풀이
if (a % 2n === 0n || b % 2n === 0n) {
  console.log(0);
} else {
  if (a > b) {
    console.log(b.toString());
  } else {
    console.log(a.toString());
  }
}
