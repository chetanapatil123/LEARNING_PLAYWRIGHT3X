
let stausCode= 404;

let catogory= stausCode <300 ?"success":
              stausCode <400 ?"redirect":
              stausCode <500 ?"client error":"server error";

              console.log(`Status code: ${stausCode} - ${catogory}`);
