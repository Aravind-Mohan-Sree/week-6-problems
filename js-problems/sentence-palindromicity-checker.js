// check whether a sentence is palindrome or not.
const str = 'A Santa at NASA';
const modiStr = str.toLowerCase().split(' ').join('');
const revStr = modiStr.split('').reverse().join('');

const result = modiStr === revStr ? `'${str}' is a palindrome!` : `'${str}' is not a palindrome!`;

console.log(result);