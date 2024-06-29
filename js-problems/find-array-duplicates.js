// find duplicates in an array.
const arr = [2, 4, 2, 5, 4, 2];
const map = {};
const newArr = [];

arr.forEach((ele) => {
  map[ele] = (map[ele] || 0) + 1;
});

for (const key in map) {
  if (map[key] > 1) {
    newArr.push(+ key);
  }
}

console.log(newArr);