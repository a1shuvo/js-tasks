/* 
Task-2:
Count how many times a string has the letter a or A.
*/

const newString = "Airplane";

let count = 0;

for (const letter of newString) {
    if (letter === "a" || letter === "A") {
        count++;
    }
}

console.log(count);


/* 
* Using Split() method
* Inside split() method used RegEx syntax for "/" for escape strings and "|" pipe defines or in RegEx.
* Finally number of times letter a or A present in the string is one less then total length of splitted string array.
*/
console.log(newString.split(/a|A/).length - 1);