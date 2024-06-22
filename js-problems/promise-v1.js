// a promise which resolves if the provided number is even else reject.
function isEven (num) {
  return new Promise ((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(num);
    } else {
      reject(num);
    }
  });
}

isEven (2)
.then ((value) => {
  console.log(`${value} is an Even number!`);
})
.catch ((reason) => {
  console.log(`${reason} is not an Even number!`);
});