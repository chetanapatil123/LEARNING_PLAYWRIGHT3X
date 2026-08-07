
function startBrowser() {
   let browser = "Chrome";

    function installeBrowser() {
        console.log(browser); // Accessing the outer function's variable
    }
    return installeBrowser;

}

const runTC=startBrowser();
runTC();  //calling the inner function