// writing values from 100 to 1 within a file(sample.txt) using writeFile.
const fs = require('node:fs');

let content = '';

for (let i = 100; i > 0; i--) {
  content += i + '\n';
}

fs.writeFile('./files/sample.txt', content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('finished');
  }
});