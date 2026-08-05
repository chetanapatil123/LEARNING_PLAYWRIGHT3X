// var  -

var a=10;
console.log(a);

//Define

function printHello(){
    console.log("Hello, World!");

var b=20;
console.log(b);
if(true){
    var c=30;
    console.log(c); 
}
console.log(c); // c is accessible here because var is function-scoped
}
//call the function
printHello();

//let  -global scope

let x = 10;
console.log(x);

function printHelloLet(){
    console.log("Hello, World!");
let y = 20;
console.log(y);
if(true){
    let z = 30;
    console.log(z); 
}
console.log(y); // y is accessible here because let is block-scoped
}
//call the function
printHelloLet();

//let does not allow redeclaration in the same scope
let m = 10;
console.log(m);

//var allows redeclaration in the same scope
var n = 20;
console.log(n);
var n = 30;
console.log(n);

//const  -global scope

const p = 10;
console.log(p); 

    function printHelloConst(){
        console.log("Hello, World!");
    const q = 20;
    console.log(q);
    
}