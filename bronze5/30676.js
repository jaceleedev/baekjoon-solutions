// 이 별은 무슨 색일까 (30676)
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const lambda = Number(input[0]);

if (lambda >= 620) {
  console.log('Red');
} else if (lambda >= 590) {
  console.log('Orange');
} else if (lambda >= 570) {
  console.log('Yellow');
} else if (lambda >= 495) {
  console.log('Green');
} else if (lambda >= 450) {
  console.log('Blue');
} else if (lambda >= 425) {
  console.log('Indigo');
} else if (lambda >= 380) {
  console.log('Violet');
}
