// avoid common elements in both array and insert rest of the elements to a new array.
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 8, 7, 2, 9, 5];
const arr = [];

for (const ele of arr1) {
  if (!arr2.includes(ele)) {
    arr.push(ele);
  }
}

for (const ele of arr2) {
  if (!arr1.includes(ele)) {
    arr.push(ele);
  }
}

console.log(arr);