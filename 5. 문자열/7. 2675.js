const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const t = Number(input[0]);
let answer = '';

for (let i = 1; i <= t; ++i) {
  const [r, s] = input[i].split(' ');

  let qrCode = '';
  for (let j = 0; j < s.length; ++j) {
    qrCode += s.charAt(j).repeat(r);
  }

  answer += qrCode + '\n';
}

console.log(answer);
