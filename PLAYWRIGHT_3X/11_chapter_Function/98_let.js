
let a= "Hello World";

if(true){
    let a = "Hello World 2";
    console.log(a);
    let a=temp; // Output: Hello World 2
}   
//Temporary Dead Zone (TDZ) - 
// The variable a is in TDZ until it is declared and initialized.
//  Accessing it before that will result in a ReferenceError.
//console.log(a); // Output: ReferenceError: Cannot access 'a' before initialization

//Outside the block, the original variable a is still accessible
console.log(a); // Output: Hello World
