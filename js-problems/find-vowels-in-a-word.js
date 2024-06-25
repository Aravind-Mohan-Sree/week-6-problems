// find the vowels and its occurance in a word.
const word = 'aravind';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const map = new Map();

vowels.forEach((ele) => { 
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word.toLowerCase().includes(ele, i)) {
      count++;
      i = word.toLowerCase().indexOf(ele, i);      
    } else {
      map.set(ele, count);
      return;
    }
  }

  map.set(ele, count);
});

console.log(map);