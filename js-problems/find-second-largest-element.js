// program for finding the second largest element in an array.
const arr = [23, 53, 21, 4, 21, 65, 56, 2134, 23, 12, 54, 64, 31];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (Math.max(...arr) !== arr[i]) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
}

console.log(max);