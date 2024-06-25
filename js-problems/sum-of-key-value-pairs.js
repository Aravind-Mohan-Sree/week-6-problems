// program for finding the sum of all values inside the objects.
const arr = [{num1: 3, num2: 7}, {num3: 8, num4: 2}, {num5: 5, num6: 9}];

const sum = arr.reduce((acc, ele, ind, arr) => {
  for (const key in ele) {
    acc += ele[key];
  }

  return acc;
}, 0);

console.log(sum);