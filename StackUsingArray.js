/* Stacks */

/* is a linear data structure that follows the Last In, First Out (LIFO) principle.  */

/* The last element added to the stack will be the first element to be removed. */

/* The stack data structure has two main operations: */

/* 1. push: adds an element to the stack. */

/* 2. pop: removes the most recently added element. */

/* Other operations include peek and size. */

var letters = []; // this is the stack
var reversedWord = ""; // variable to store the reversed word

var word = "Library";

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

console.log("Stack content:", letters);
console.log("Stack size:", letters.length);
console.log("Top element:", letters[letters.length - 1]);

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
  reversedWord += letters.pop();
}

console.log("Reversed word:", reversedWord);
console.log("Stack content after popping::", letters);
console.log("Stack size after popping:", letters.length);


