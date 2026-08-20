
let st = "chetana patil";

let str = st.split('');

let vowels = ['a','e','i','o','u'];
let vow = 0
for(value of str){
    if(vowels.includes(value)){
    vow=vow+1;
    }
}

console.log(`Vowels: ${vow}`);