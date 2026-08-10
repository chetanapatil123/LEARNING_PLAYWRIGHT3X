
let env ="staging";

function setUpEnvironment() {
    let timeout = 5000;  //locla scope variable
    console.log(env);  //accessing global scope variable
    console.log(timeout);   //accessing local scope variable
}

setUpEnvironment();
console.log(env);  //accessing global scope
 console.log(timeout);  //accessing local scope variable (will cause an error)

 let x_e=9;
 function outer()
 {
    let x=8;
    function inner()
    {
        let y=7;
       
        console.log(x);  //accessing outer function scope variable
    }
 
  inner();  //calling inner function
 console.log(y);  
}