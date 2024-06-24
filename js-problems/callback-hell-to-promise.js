// callback hell(pyramid of doom) to promise.

// sample callback hell.

/*  function firstFunction(callback) {
      console.log('first function completed!');
      callback();
    }

    function secondFunction(callback) {
      console.log('second function completed!');
      callback();
    }

    function thirdFunction(callback) {
      console.log('third function completed!');
      callback();
    }

    firstFunction(() => {
      secondFunction(() => {
        thirdFunction(() => {
          console.log('all functions completed!');
        });
      });
    });  */

// converting the above to promise.
function firstFunction() {
  return new Promise((resolve, reject) => {
    console.log('first function completed!');
    resolve();
  });
}

function secondFunction() {
  return new Promise((resolve, reject) => {
    console.log('second function completed!');
    resolve();
  });
}

function thirdFunction() {
  return new Promise((resolve, reject) => {
    console.log('third function completed!');
    resolve();
  });
}

firstFunction()
.then(() => {
  return secondFunction();
})
.then(() => {
  return thirdFunction();
})
.then(() => {
  console.log('all functions completed!');
});