
function validateStatusCode(status) {
  if (status < 200 || status >= 300) {
    console.log("Invalid status code");
  } 

//expression arrow function
const validateStatusCodeArrow = (status) => {
  if (status < 200 || status >= 300) {
    console.log("Invalid status code");
  } 
}

//arrow function with no parameter
const getStatusCode = () => 200;    
const statusCode = getStatusCode();
console.log(statusCode);

}
validateStatusCode(200);
validateStatusCodeArrow(404);

