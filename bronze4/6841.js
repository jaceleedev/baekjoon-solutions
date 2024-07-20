// I Speak TXTMSG (6841)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const translation = {
  CU: 'see you',
  ':-)': 'I’m happy',
  ':-(': 'I’m unhappy',
  ';-)': 'wink',
  ':-P': 'stick out my tongue',
  '(~.~)': 'sleepy',
  TA: 'totally awesome',
  CCC: 'Canadian Computing Competition',
  CUZ: 'because',
  TY: 'thank-you',
  YW: 'you’re welcome',
  TTYL: 'talk to you later',
};

for (let i = 0; i < input.length; ++i) {
  const message = input[i];

  console.log(translation[message] || message);
}
