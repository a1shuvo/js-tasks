/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burgerOrderedPrice = 550;

if (burgerOrderedPrice > 500) {
    console.log("You Get a free coke.");
} else {
    console.log("You have to pay 30TK for Coke.");
}


/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let weight = 56;
let height = 1.65;

let BMI = weight / (height * height);
BMI = 30;

if (BMI < 18.5) {
    console.log("you are underweight.");
} else {
    if (BMI <= 24.9) {
        console.log("you are normal.");
    } else {
        if (BMI <= 29.9) {
            console.log("you are overweight."); 
        } else {
            console.log("you are obese.");
        }
    }
}

