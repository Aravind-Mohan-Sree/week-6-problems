const fs = require('node:fs');

const arr = [2, 4, 6, 7, 912, 34];
const content = arr.toString();

fs.writeFile('./files/sample.txt', content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('finished');
  }
});