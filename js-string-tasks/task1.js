/* 
Task-1:
Count how many times a string has the letter a 
*/

const newString = "Airplane";

let count = 0;
for (const letter of newString) {
    if (letter === "a") {
        count++;
    }
}

console.log(count);

/* 
Different Approach
* Here "split()" function divide the string into an array. 
* Array data is splitted by mentioned separator "a". 
* The number of 'a' characters is one less than the resulting array length. 
* The toLowerCase() function convert the entire string into lower case alphabet.
*/
console.log(newString.toLowerCase().split("a").length - 1);
