/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 60;
let isStudent = true;
let ticketFare = 0;
const regularFare = 800;

if (age < 10) {
    ticketFare = 0;
} else if (isStudent) {
    ticketFare = regularFare * 0.5;
} else if (age >=60) {
    ticketFare = regularFare * 0.85;
} else {
    ticketFare = regularFare;
}

console.log("Ticket Fare: ", ticketFare);