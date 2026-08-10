
function makeRateLimiter(limit){

    let call=0;

    function check(){
        call++;
        return call <= limit;
    }
    return check;
}

let limiter=makeRateLimiter(4);
console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());