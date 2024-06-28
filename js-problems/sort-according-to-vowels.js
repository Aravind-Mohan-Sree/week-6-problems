// sort words in an array on the basis of vowels intensity.
let words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
const countArr = [];
const vowels = 'aeiouAEIOU';

for (const ele of words) {
  const count = ele.split('').filter((ele) => {return vowels.includes(ele)}).length;
  
  countArr.push([ele, count]);
}

countArr.sort((a, b) => {return a[1] - b[1]});
words.splice(0);

words = countArr.map((ele) => {return ele[0]});

console.log(words);