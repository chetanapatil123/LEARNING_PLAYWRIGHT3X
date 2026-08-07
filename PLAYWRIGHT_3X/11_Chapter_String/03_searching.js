
let url= "https://staging.vwo.com/api/login?retry=true";

//include()
url.includes("staging");
url.includes("production");

//startWith
url.startsWith("https");
url.startsWith("http://");
url.endsWith("true");

//indexOF

console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere"));