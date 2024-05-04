const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
// Set을 사용하지 않은 풀이
// let count = 0;

// for (let i = 1; i <= n; ++i) {
//   const word = input[i];
//   let isGroupWord = true;
//   let map = {};

//   for (let j = 0; j < word.length; ++j) {
//     const ch = word[j];

//     if (!map[ch]) {
//       map[ch] = [j];
//     } else {
//       const diff = Math.abs(j - map[ch][map[ch].length - 1]);

//       if (diff > 1) {
//         isGroupWord = false;
//         break;
//       } else {
//         map[ch].push(j);
//       }
//     }
//   }

//   if (isGroupWord) {
//     ++count;
//   }
// }

// console.log(count);

// Set을 사용한 풀이
const set = new Set();
let count = 0;

for (let i = 1; i <= n; ++i) {
  const word = input[i];
  let isGroupWord = true;
  let previousCh = '';

  for (const ch of word) {
    if (set.has(ch)) {
      if (ch !== previousCh) {
        isGroupWord = false;
        break;
      }
    } else {
      set.add(ch);
      previousCh = ch;
    }
  }

  if (isGroupWord) {
    ++count;
  }

  set.clear();
}

console.log(count);
