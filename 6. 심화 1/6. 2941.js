const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let word = input[0];
const croatiaAlphabets = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

// 정규표현식이나 replaceAll을 사용하지 않고 풀이
// let count = 0;
// for (const alphabet of croatiaAlphabets) {
//   while (true) {
//     const index = word.indexOf(alphabet);

//     if (index === -1) {
//       break;
//     }

//     ++count;
//     word =
//       word.slice(0, index) +
//       '0'.repeat(alphabet.length) +
//       word.slice(index + alphabet.length);
//   }
// }

// const othersCount = word.split('').filter((ch) => ch !== '0').length;
// const answer = count + othersCount;

// console.log(answer);

// replaceAll을 사용하여 풀이 (정규표현식을 사용한다면, replace를 써도 가능)
croatiaAlphabets.forEach((alphabet) => {
  word = word.replaceAll(alphabet, '0');
});

console.log(word.length);
