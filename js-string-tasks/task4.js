/* 
Task-4:
If a given string has either x, replace x by y. if the given string has X, replace it by Y.

Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.
*/


let str = "example text with X and x";

// Using replaceAll() method
console.log(str.replaceAll("x", "y").replaceAll("X", "Y"));

// Using split() and join() method
console.log(str.split("x").join("y").split("X").join("Y"));


