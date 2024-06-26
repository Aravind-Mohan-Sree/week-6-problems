// sum first and last digit of a number.
const num = 6135334515;
const strArr = num.toString().split('');

const sum = Number(strArr[0]) + Number(strArr[strArr.length - 1]);

console.log(sum);