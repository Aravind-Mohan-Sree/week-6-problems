// sum the digits of a number.
const num = 57;

const strArr = num.toString().split('');

const numArr = strArr.map((ele) => {
  return Number(ele);
});

const sum = numArr.reduce((acc, ele) => {
  return acc + ele;
});

console.log(sum);