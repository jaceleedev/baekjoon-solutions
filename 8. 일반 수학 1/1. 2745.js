const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// parseInt를 사용하지 않고 풀이
// const [n, b] = input[0].split(' ');
// const numB = Number(b);
// const diff = 'A'.charCodeAt(0) - 10;
// let scale = 1;
// let answer = 0;

// for (let i = n.length - 1; i >= 0; --i) {
//   let value = 0;

//   if (!isNaN(n[i])) {
//     value = Number(n[i]) * scale;
//   } else {
//     value = (n[i].charCodeAt(0) - diff) * scale;
//   }

//   answer += value;
//   scale *= numB;
// }

// console.log(answer);

// parseInt를 사용한 풀이
const [n, b] = input[0].split(' ');
const answer = parseInt(n, Number(b));

console.log(answer);
