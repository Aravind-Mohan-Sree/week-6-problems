const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    arr.splice(i, 1);
    i--;
  }
}

console.log(arr);