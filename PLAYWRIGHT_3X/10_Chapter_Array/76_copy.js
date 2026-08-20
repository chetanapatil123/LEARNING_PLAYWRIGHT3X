
//shallow copy of an array using spread operator    

let original = [1, 2, 3, 4, 5];

let copyUsingSpread = [...original];
console.log(copyUsingSpread); // Output: [1, 2, 3, 4, 5]


// Create a shallow copy of the original array using slice()
let copyUsingSlice = original.slice();
console.log(copyUsingSlice); // Output: [1, 2, 3, 4, 5]     

let copy1 = original.slice(0);
console.log(copy1); // Output: [1, 2, 3, 4, 5]

let copy2= Array.from(original);
console.log(copy2); // Output: [1, 2, 3, 4, 5]

let copy3=original.concat();
console.log(copy3); // Output: [1, 2, 3, 4, 5]

//Deep copy

let deepCopy= original;

original.push(6);
console.log(original);

