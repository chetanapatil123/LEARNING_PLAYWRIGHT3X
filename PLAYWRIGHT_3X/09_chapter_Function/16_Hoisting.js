
//var a=;

console.log(a); // Output: undefined due to hoisting

var a = 10;
console.log(a); // Output: 10

//memrory creation phase - memory is allocated for variable a 
//                          and initialized with undefined

//var a= undefined; // memory is allocated for variable 
//                 a and initialized with undefined
//var  b=undefined; // memory is allocated for variable b and initialized with undefined

console.log(b); // Output: undefined due to hoisting
 var b = "Hello";
console.log(b); // Output: Hello

//hoisting does not move the initialization of the variable,
//  it only moves the declaration to the top of the scope.