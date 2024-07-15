// 모음의 개수 (1264)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length - 1; ++i) {
  const vowels = input[i].match(/[aeiou]/gi);

  console.log(vowels ? vowels.length : 0);
}
