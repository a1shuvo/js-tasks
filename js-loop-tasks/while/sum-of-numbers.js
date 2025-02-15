/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let i = 81;
let sumOfOdd = 0;
while (i <= 131) {
    if (i % 2 === 1) {
        sumOfOdd += i;
    }
    i++;
}

console.log(sumOfOdd);




/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let j = 206;
let sumOfEven = 0;
while (j <= 311) {
    if (j % 2 === 0) {
        sumOfEven += j;
    }
    j++;
}

console.log(sumOfEven);
