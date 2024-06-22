// a generator function for yielding all multiples of 10 between 1 to 100 in descending order.
function* generatorFunction() {
  for (let i = 100; i > 0; i--) {
    if (i % 10 === 0) {
      yield i;
    }
  }
}

const generator = generatorFunction();

for (const value of generator) {
  console.log(value);
}