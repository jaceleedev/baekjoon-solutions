const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const buddhistEra = Number(input[0]);
const eraDiff = 2541 - 1998;

const annoDomini = buddhistEra - eraDiff;

console.log(annoDomini);
