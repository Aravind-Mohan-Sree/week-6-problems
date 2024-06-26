// find the vowels and its occurance in a word.
const word = 'aravind';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const map = {};

for (const ele of vowels) {
  for (let i = 0; i < word.length; i++) {
    if (word.includes(ele, i)) {
      map[ele] = (map[ele] || 0) + 1;
      i = word.indexOf(ele, i);
    }
  }
}

console.log(map);