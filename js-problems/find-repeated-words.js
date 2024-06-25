// find repeated words in a sentence and its occurance.
const str = 'The kids played the game until the kids were too tired to play the game anymore';
const strArr = str.toLowerCase().split(' ');
const map = new Map();

strArr.forEach((ele, ind, arr) => {
  let count = 0;

  for (let i = ind; i < arr.length; i++) {
    if (arr.includes(ele, i)) {
      count++;
      i = arr.indexOf(ele);
    }
  }

  if (count > 1) {
    map.set(ele, count--);
  }
});

console.log(map);