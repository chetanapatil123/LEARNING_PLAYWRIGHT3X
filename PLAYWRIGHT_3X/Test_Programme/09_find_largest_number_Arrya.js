
let arr = [43,67,90,36,14];

let large = arr[0]

for(test of arr){
    if(test > large){
        large = test;
    }
}

console.log(`largest number is ${large}`);