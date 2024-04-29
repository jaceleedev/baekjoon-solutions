const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let i = 0;
let answer = '';
while (true) {
  const [a, b] = input[i].split(' ').map(Number);

  if (a === 0 && b === 0) {
    break;
  }

  answer += `${a + b}\n`;
  ++i;
}

console.log(answer);
