/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */

let sumOfOdd = 0;
for (let i = 91; i <= 129; i++) {
    if (i % 2 === 1) {
        sumOfOdd += i;
    }
}
console.log(sumOfOdd);


/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */


let sumOfEven = 0;
for (let i = 51; i <= 85; i++) {
    if (i % 2 === 0) {
        sumOfEven += i;
    }
}
console.log(sumOfEven);
