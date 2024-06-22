// sample callback for greeting someone.
function greet(wish, callback) {
  this.wish = wish;
  callback();
}

function content() {
  console.log(`${this.wish} Arun`);
}

greet('Welcome', content);