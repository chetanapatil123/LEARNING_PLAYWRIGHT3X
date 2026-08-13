
let a1={status:'pass'};
console.log(a1.status);

//keys are case sentive

let a22={status: "pass", status: "fail"};
console.log(a22["status"]);
console.log(a22["status"]);

let a= {status: "pass"};
let b=a;
b.status= "fail";
console.log(a.status);
console.log(b.status);

let c={status:"pass"};
let d= {status:"pass"};
console.log(c==d);

const t_json= {
    "name": "pramod",
    "age": 10
};
console.log(t_json);