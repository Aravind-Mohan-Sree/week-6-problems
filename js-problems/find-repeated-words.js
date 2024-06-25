// find repeated words in a sentence and its intensity.
const str = `The rain kept falling, and the rain didn't stop until the sun appeared and the rain was gone`;
const strArr = str.toLowerCase().split(' ');
const map = new Map();

strArr.forEach((ele) => {
  let count = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr.includes(ele, i)) {
      count++;
      i = strArr.indexOf(ele, i);
    }
  }

  if (count > 1) {
    map.set(ele, --count);
  }
});

console.log(map);