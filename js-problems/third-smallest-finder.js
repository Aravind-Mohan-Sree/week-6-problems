// find the third smallest number in an array.
const arr = [23, 54, 97, 67, 232, 55, 544, 565, 2453, 232, 454, 23, 12, 65, 36];
const uniqueArr = [...new Set(arr)];

const result = uniqueArr.reduce((acc, ele) => {
  const [small, secSmall, thirdSmall] = acc;

  if (ele < small) {
    return [ele, small, secSmall];
  } else if (ele < secSmall) {
    return [small, ele, secSmall];
  } else if (ele < thirdSmall) {
    return [small, secSmall, ele];
  }

  return acc;
}, [Infinity, Infinity, Infinity]);

console.log(result[2]);