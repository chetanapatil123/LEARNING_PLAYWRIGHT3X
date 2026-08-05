
function dubleMe(a) {
    return a * 2;
}

const dubleMeArrow = (a) => a * 2;

dubleMe(10);

const result = dubleMeArrow(10);
return result;

const getEnvironment = () => "Development";

console.log(getEnvironment());

//multiline arrow function
const addNumbers = (a, b) => {
    const sum = a + b;
    return sum;
}

const result1 = score => {
    if (score >= 60) {
        return "Pass";  
    } else {
        return "Fail";
    }
}
console.log(result1(75));
cosole.log(result1(50));

