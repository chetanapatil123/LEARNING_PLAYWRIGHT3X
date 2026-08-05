
let arr=[1, 2, 3, 4, 5];
// Slice the array from index 1 to 3 (not including index 3)
let slicedArr = arr.slice(1, 3);
console.log(slicedArr); // Output: [2, 3]

console.log(arr.slice(2)); // Output: [3, 4] (original array remains unchanged)

console.log(arr.slice(-2)); // Output: [4, 5] (last two elements of the array)