
const user={
    name: "john",
    age: 30,
    email:"john@example.com"
};

console.log(user.name);
console.log(user);

//Accessing properties

console.log(user.name);
console.log(user["age"]);

//Ading/modifying 
user.city= "NYC";
user.age=31;

console.log(user);