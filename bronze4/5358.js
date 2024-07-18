// Football Team (5358)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length; ++i) {
  const name = input[i];
  const replacedName = [];

  for (const ch of name) {
    if (ch === 'e') {
      replacedName.push('i');
    } else if (ch === 'i') {
      replacedName.push('e');
    } else if (ch === 'E') {
      replacedName.push('I');
    } else if (ch === 'I') {
      replacedName.push('E');
    } else {
      replacedName.push(ch);
    }
  }

  console.log(replacedName.join(''));
}
