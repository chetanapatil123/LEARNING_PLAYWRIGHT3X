
let num = [3, 10 ,8];

let large = num[0]

for(test of num){
    if(test > large){
        large = test;
    }
}

console.log("largest of 3 number is " + large)