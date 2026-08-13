
console.log(""== 0); //true because loose equality operator (==) converts the empty string to a number, which is 0, and then compares it to 0.
console.log("0"== 0); //true because loose equality operator (==) converts the string "0" to a number, which is 0, and then compares it to 0.
console.log("0"=== 0); //false because strict equality operator (===) checks both value and type, and the string "0" is not the same type as the number 0.

console.log(""=== 0); //false because strict equality operator (===) checks both value and type, and the empty string "" is not the same type as the number 0.

console.log("0"=== 0); //false because strict equality operator (===) checks both value and type, and the string "0" is not the same type as the number 0.
console.log(""=== "0"); //false because strict equality operator (===) checks both value and type, and the empty string "" is not the same type as the string "0".

//null vs undefined
console.log(null == undefined); //true because loose equality operator (==) converts null to undefined when comparing.

console.log(null === undefined); //false because strict equality operator (===) checks both value and type, and null and undefined are not the same type.

console.log(null == 0); //false because loose equality operator (==) does not convert null to a number when comparing.

console.log(undefined == 0); //false because loose equality operator (==) does not convert undefined to a number when comparing.    

console.log(null === 0); //false because strict equality operator (===) checks both value and type, and null is not the same type as the number 0.
console.log(undefined === 0); //false because strict equality operator (===) checks both value and type, and undefined is not the same type as the number 0.        

console.log(null> 0); //false because null is not greater than 0.
console.log(null>= 0); //false because null is not less than 0.
console.log(null<0); //false because null is not less than 0.
console.log(undefined>0); //false because undefined is not greater than 0.
console.log(undefined<0); //false because undefined is not less than 0.