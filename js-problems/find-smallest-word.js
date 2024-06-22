// program for finding the smallest word in a sentence.
const str = 'i love you';

const arr = str.split(' ');

const lghtArray = arr.map((element) => {
  return element.length;
});

console.log(arr[lghtArray.indexOf(Math.min(...lghtArray))]);