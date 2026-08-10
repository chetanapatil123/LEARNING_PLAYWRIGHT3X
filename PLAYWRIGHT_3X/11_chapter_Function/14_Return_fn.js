
function getStatus(code) {
    if (code >= 200 && code < 300) 
        return "success";
    if (code >= 400 && code < 500)
        return "client error";
    if (code >= 500 )
    return "server error";
}

getStatus(200); // returns "success"
getStatus(404); // returns "client error"
getStatus(500); // returns "server error"

//Return nathing -undefined
function logTest(name){
    console.log( `Running: ${name}` );
}

logTest("Hi this is a log"); // Output: Running: Test 1
logTest("Test 2"); // Output: Running: Test 2