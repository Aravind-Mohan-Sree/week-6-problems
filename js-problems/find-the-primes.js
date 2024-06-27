// find the prime numbers within an array.
const arr = [-5, 0, 1, 2, 4, 5, 8, 11, 14, 17, 18, 19, 21, 23, 24, 29, 30, 31, 33, 37, 40, 41, 44, 43, 47, 49, 50];

const primes = arr.filter((ele) => {
  if (ele < 2) {
    return 0;
  } else if (ele <= 3) {
    return ele;
  } else {
    for (let i = 2; i <= ele / 2; i++) {
      if (ele % i === 0) {
        return 0;
      } 
    }

    return ele;
  }
});

console.log(primes);