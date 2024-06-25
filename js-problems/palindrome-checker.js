// check whether a word is palindrome or not.
const word = 'malayalam'.toLowerCase();

const revWord = word.split('').reverse().join('');

const isPalindrome = word === revWord ? `'${word}' is a palindrome!` : `'${word}' is not a palindrome!`;

console.log(isPalindrome);