const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);

let answer = 'int';
for (let i = 0; i < n; i += 4) {
  answer = 'long ' + answer;
}

console.log(answer);
