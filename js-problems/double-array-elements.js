// double all elements within an array.
const arr = [1, 2, 3, 4, 5];

arr.forEach((ele, ind, arr) => {
  arr[ind] = ele * 2;
});

console.log(arr);