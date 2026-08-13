
let result = Array.isArray([1, 2, 3]); // true
console.log(result);

let arr= Array.isArray("a"); // false
console.log(arr);

//every() method checks if all elements in the array pass the test implemented by the provided function.
[20,30,60].every(score => score > 10); // true

[20,30,60].every(score => score > 50); // false

//some() method checks if at least one element in the array passes the test implemented by the provided function.
//  It returns a Boolean value.
[20,30,60].some(score => score > 50); // true

[20,30,60].some(score => score > 100); // false