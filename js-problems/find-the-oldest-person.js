// program for finding the name of oldest person.
const person = [{name: 'sam', age: 34}, {name: 'arun', age: 19}, {name: 'das', age: 23}, {name: 'david', age: 53}];

const oldPerson = person.reduce((acc, ele, ind, arr) => {
  if (acc.age > ele.age) {
    return acc;
  }  

  return ele;
});

console.log(oldPerson.name);