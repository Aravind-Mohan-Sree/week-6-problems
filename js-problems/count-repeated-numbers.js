// count repeated numbers within an array.
const arr = [2, 3, 3, 4, 5, 6, 4, 1, 7, 9, 1, 3, 1, 8, 4, 1];
const countMap = {};
let total = 0;

arr.forEach((ele) => {
  countMap[ele] = (countMap[ele] || 0) + 1;
});

for (const key in countMap) {
  if (countMap[key] > 1) {
    total++;
  }
}

console.log(total);