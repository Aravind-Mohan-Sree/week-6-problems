// find odd and even numbers within an array.
const numbers = [5, 12, 8, 130, 44, 3, 77, 22, 90, 15];
const uniqueArr = [...new Set(numbers)];

const result = uniqueArr.reduce((acc, ele) => {
  if (ele % 2 === 0) {
    acc['evens'].push(ele);
  } else {
    acc['odds'].push(ele);    
  }

  return acc;
}, {odds: [], evens: []});

console.log(result);