
let fruits = ["Banana", "Orange", "Apple", "Mango"];

// Sort the array
fruits.sort();  
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

let scores = [40, 100, 1, 5, 25, 10];
console.log(scores.sort()); // Output: [1, 10, 100, 25, 40, 5] (incorrect numerical order)

let num=[40, 100, 1, 5, 25, 10];
// Sort the array numerically
num.sort((a, b) => a - b);
console.log(num); // Output: [1, 5, 10, 25, 40, 100]