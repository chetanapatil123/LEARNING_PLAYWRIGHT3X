
function sum(a, b, c) {
    return a + b + c;
}

let numbers = [1, 2, 3];

// Using the spread operator to pass array elements as individual arguments
let result = sum(...numbers);

console.log(result); // Output: 6

//
function hasError(...codes) {
    return codes.some(code => code >= 400);
}

let errorCodes = [200, 404, 500];
let hasErrors = hasError(...errorCodes);
console.log(hasErrors); // Output: true

