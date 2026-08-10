
//Numeric seperators

let million=1_000_000;
let binarySep=0b1010_000;
let hexaSep=0xFF_FF;

console.log("seperator 1_000_000");
console.log("seperator 0b1010_000");
console.log("seperator 0xFF_FF");

//BIGINT -arbitraily large integer

let big =1000000;
let big1=BigInt("698433593649364390832082039090");
let bigFromNum=BigInt(42);

console.log("BigInt literal");
console.log("BigInt from string");
console.log("BigInt from number");


//special numeric value 

//Infinity

console.log("Infinity:", Infinity);
console.log("1/0:", 1/0);
console.log("-1/0:", -1/0);
console.log("typeOf Infinity:", typeof Infinity);

