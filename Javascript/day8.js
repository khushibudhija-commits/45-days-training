
console.log("task: asynchronous callback with setTimeOut")
let a1=15;
console.log(a1);
function cb(){
    console.log("Inside callback function");
}
setTimeout(cb,0)
// clearTimeout()    
console.log("outside callback scope");