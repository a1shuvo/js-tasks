/* 
### 4. Checking if it's an Array

**Instructions:**

1. Create different variables, each containing either an array or a non-array value.

2. Now use isArray to check if each variable is an array.

3. Print a message to the console indicating whether each variable is an array or not.
*/


const numbers = [2, 5, 10, 12];
const persons = ["Shuvo", "Rudra", "Shrija"];
const language = "Javascript";

console.log(Array.isArray(language)?"It's an Array" : "Not an Array");