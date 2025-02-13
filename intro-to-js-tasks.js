/* 
#Task-1
You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.
---------------------------------------------------------------------
Input:
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.
---------------------------------------------------------------------
Sample Input:
1000
700

Sample Output:
300 
*/

let moneyHave = 500;
let fruitsPrice = 370;

let moneyReturn = moneyHave - fruitsPrice;

console.log(moneyReturn);


/* 
#Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
------------------------------------------------
Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places. 
------------------------------------------------
Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04
*/

let mathScore = 75.25;
let biologyScore = 65;
let chemistryScore = 80;
let physicsScore = 35.45;
let banglaScore = 99.50;

let averageScore = (mathScore + biologyScore + chemistryScore + physicsScore + banglaScore) / 5;

console.log(parseFloat(averageScore.toFixed(2)));



/* 
#Task-3
You task is to divide the given number by 5 and show the remainder as the output.
-----------------------------------------------------
Input:
The first line of the input contains the number.

Output:
Print the remainder.
-----------------------------------------------------
Sample Input:
119

Sample Output:
4 
*/

let givenNumber = 119;

let remainder = givenNumber % 5;

console.log(remainder);



/* 
#Task-4
What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers. 
*/

var a = isNaN('11');

var a = isNaN(2-10);

console.log(a);

/* 
#Explanation:
In JavaScript isNaN() function determines if a value is Nan (Not a Number). Here Both First & Second line of code returns false. 

Why does isNaN('11') return false?
1. '11' is a string containing numeric characters.
2. JavaScript implicitly converts the string '11' to a number before checking if it's NaN.
3. '11' becomes 11, which is a valid number.
4. Since 11 is not NaN, isNaN(11) returns false.

console.log(isNaN('11')); // false (because '11' is converted to 11)
console.log(isNaN(11));   // false (11 is a valid number)
console.log(isNaN('abc')); // true (can't convert 'abc' to a number, so it's NaN)
console.log(isNaN(NaN));  // true (NaN is NaN)

Alternative: Number.isNaN()
Unlike isNaN(), the Number.isNaN() function does not perform type conversion. It only returns true if the value is exactly NaN.

console.log(Number.isNaN('11')); // false (no type conversion, '11' is a string)
console.log(Number.isNaN(NaN));  // true
console.log(Number.isNaN('abc')); // false (string is not strictly NaN)

Summary:
isNaN('11') → false because '11' is converted to 11, which is a valid number.
Use Number.isNaN(value) when you need a strict NaN check without implicit type conversion.

*/





