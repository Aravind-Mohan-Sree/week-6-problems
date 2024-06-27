// find the sum of keys 'a' and 'b' separately.
const array = [ { a:15 , b:4 } , { a:4 , b:9 } , { a:13 , b:25 } ];

const sum = array.reduce((acc, ele) => {
  for (const key in acc) {
    acc[key] = acc[key] + ele[key];
  }

  return acc;
});

console.log(sum);