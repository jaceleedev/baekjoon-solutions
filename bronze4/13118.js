// 뉴턴과 사과 (13118)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const persons = input[0].split(' ').map(Number);
const apple = input[1].split(' ').map(Number);

let answer = 0;

for (let i = 0; i < persons.length; ++i) {
  const person = persons[i];

  if (person === apple[0]) {
    answer = i + 1;
    break;
  }
}

console.log(answer);
