
let str=" Hello,world!  ";

console.log(str.toUpperCase());
console.log(str.toLowerCase());

//Trim whitespace
console.log(str.trim());

str.trimStart();
str.trimEnd();

//Replace
let msg ="Test: FAIL.Rtry:FAIL.";
msg.replace("FAIL","PASS");
msg.replaceAll("FAIL","PASS");
msg.replace("FAIL/g","PASS");

//concatenation

"Hello" + " " +"World";
"Hello".concat(" ","World");
`${"Hello"}.${"World"}`;
