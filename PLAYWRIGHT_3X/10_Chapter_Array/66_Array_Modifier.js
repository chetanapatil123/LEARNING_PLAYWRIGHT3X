
let staus=["pass", "fail", "pass", "fail", "pass"];

console.log(staus.length);

console.log(staus[0]);//"pass"
console.log(staus.at(-1));//"fail"
console.log(staus[2]);//"pass"
console.log(staus[3]);//"fail"
console.log(staus[4]);//"pass"

//how to modify the array

staus[0]="blocked";

console.log(staus[0]);//"blocked"