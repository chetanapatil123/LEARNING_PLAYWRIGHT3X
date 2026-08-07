const { run } = require("node :test");

function maxRetryTraker(maxRetryCount) {
    let retryCount = 0;
    function tryAgain(testName) {
        retrtyCount++;
        if (retryCount > maxRetryCount) {
            return ` ${testName} exceed retryCount ${maxRetryCount}`;
        } 
        return `RetryCount ${retryCount}/${maxRetryCount} for ${testName}`;
    };
    return tryAgain;
}

let retry = maxRetryTraker(3);
console.log(retry("Login Test"));   
console.log(retry("Login Test"));
console.log(retry("Login Test"));
console.log(retry("Login Test"));  // This will exceed the max retry count