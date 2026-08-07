
function outerFunction() {
    let outerVariable = "I am from the outer function";

    function innerFunction() {
        let innerVariable = "I am from the inner function";
        console.log(outerVariable);
        console.log(innerVariable);
    }

    innerFunction();
    console.log(innerVariable); // This will cause an error because innerVariable is not accessible here
}

