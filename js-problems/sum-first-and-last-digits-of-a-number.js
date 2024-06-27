// sum first and last digit of a number.
const num = 6135334515;
const strArr = num.toString().split('');

const sum = +strArr[0] + +strArr[strArr.length - 1];

console.log(sum);