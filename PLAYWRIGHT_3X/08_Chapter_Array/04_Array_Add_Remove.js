
let arr=[11,22,33,44,55];

console.log(arr.length);

//add
arr.push(66);
console.log(arr.length);
console.log(arr[5]);//66

//remove
arr.pop();
console.log(arr.length);
console.log(arr[5]);//undefined

//add to the start of the array
arr.unshift(0);
console.log(arr.length);
console.log(arr[0]);//0 

//remove from the start of the array
arr.shift();
console.log(arr.length);
console.log(arr[0]);//11    

arr.splice(2,1);//remove 1 element from index 2
console.log(arr);

arr.splice(2,0,76);
console.log(arr);

arr.splice(1,2,27,56);
console.log(arr);