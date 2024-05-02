const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const word = input[0];
const dialMap = {
  ABC: 2,
  DEF: 3,
  GHI: 4,
  JKL: 5,
  MNO: 6,
  PQRS: 7,
  TUV: 8,
  WXYZ: 9,
};

let answer = 0;
for (let i = 0; i < word.length; ++i) {
  const ch = word.charAt(i);

  for (const dial in dialMap) {
    if (dial.includes(ch)) {
      answer += dialMap[dial] + 1;
    }
  }
}

console.log(answer);
