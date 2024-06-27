// find the second largest number within an array.
const arr = [23, 54, 97, 67, 232, 55, 544, 565, 2453, 232, 454, 23, 12, 65, 36];
const uniqueArr = [...new Set(arr)];

const result = uniqueArr.reduce((acc, ele) => {
  const [large, secLarge] = acc;

  if (ele > large) {
    return [ele, large];
  } else if (ele > secLarge) {
    return [large, ele];
  }

  return acc;
}, [-Infinity, -Infinity]);

console.log(result[1]);