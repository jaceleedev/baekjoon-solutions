const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const word = input[0];

let start = 0;
let end = word.length - 1;
let isPalindrome = true;

while (start < end) {
  if (word.charAt(start) !== word.charAt(end)) {
    isPalindrome = false;
    break;
  }
  ++start;
  --end;
}

console.log(Number(isPalindrome));
