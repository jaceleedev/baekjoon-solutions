// Счастье Мистера Бина (29163)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const feelings = input[1].split(' ').map(Number);

let happy = feelings.filter((feeling) => feeling % 2 === 0).length;
let sad = feelings.filter((feeling) => feeling % 2 === 1).length;

console.log(happy > sad ? 'Happy' : 'Sad');
