
let a=10;
let b=a;
b=99;
console.log(a);
console.log(b);

//call by value 
//primitive data type
//primitive ,number,string,boolean,null,undefined

//Object--copied by reffence ,call-by-ref
//refernce----object,array,function

let obj1={val:10};
let obj2=obj1;
obj2.val=99;

console.log(obj1.val);