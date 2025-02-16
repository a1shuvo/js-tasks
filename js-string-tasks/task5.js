/* 
Task-5:
Capitalize Every first Letter of each word in a String
*/


let str = "capitalize every first Letter of each word in a String";
let words = str.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}

let result = words.join(" ");

console.log(result);
