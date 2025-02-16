/* Task-4
Count the number of properties. */

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let count = 0;

for (const key in student) {
    count++;
}

console.log(count);

// Another Approach

// This "Object.keys()" function return array of keys of the object
const propertyCount = Object.keys(student).length;

console.log(propertyCount);