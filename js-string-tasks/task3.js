/* 
Task-3:
Check whether a string contains all the vowels a, e, i, o, u
*/

let str = "education";
const vowels = ["a", "e", "i", "o", "u"];
let containAllVowels = true;

for (const vowel of vowels) {
    if (!str.includes(vowel)) {
        containAllVowels = false;
        break;
    }
}

console.log(containAllVowels);