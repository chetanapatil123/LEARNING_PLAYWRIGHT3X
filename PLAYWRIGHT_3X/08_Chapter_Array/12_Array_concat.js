
let a= [1, 2, 3, 4, 5];
let b= [6, 7, 8, 9, 10];

let c= a.concat(b);

console.log(c); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//spread operator can also be used to concatenate arrays
let d= [...a, ...b];
console.log(d); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  

