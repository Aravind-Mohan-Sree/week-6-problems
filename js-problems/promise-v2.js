// a promise which resolves if 'w' is included in 'Hello World' else reject.
function wFinder (str) {
  return new Promise ((resolve, reject) => {
    if (str.toLowerCase().includes('w')) {
      resolve ();
    } else {
      reject ();
    }
  });
}

wFinder ('Hello World')
.then(() => {
  console.log(`'W' is included!`);
})
.catch (() => {
  console.log(`'W' is not included!`);  
})