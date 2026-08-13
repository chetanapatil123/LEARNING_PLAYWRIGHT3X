
let responseTime =850;

let sla= 1000;

let isSuccessful= responseTime<=sla ?"pass":"fail";

console.log(`Response: ${responseTime} ms-  ${isSuccessful}`);
console.log(`what is the SLA time? ${sla} ms`);