/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let score = 60;

if (score < 59) {
    console.log("Your Grade: F");
} else if (score < 69) {
    console.log("Your Grade: D");
} else if (score < 79) {
    console.log("Your Grade: C");
} else if (score < 89) {
    console.log("Your Grade: B");
} else {
    console.log("Your Grade: A");
}