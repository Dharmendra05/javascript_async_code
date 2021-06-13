/*passing function as an argument called callback
ex- foo(..., function()=>{
-->The callback function can also be defined separately and then passed to the function call.

why do we need callback function---->
1-->JavaScript runs code sequentially in top-down order. 
However, there are some cases that code runs (or must run) after something else happens and
 also not sequentially. This is called asynchronous programming.
2->Callbacks make sure that a function is not going to run before a task is completed
 but will run right after the task has completed. It helps us develop asynchronous JavaScript code
  and keeps us safe from problems and errors.

}, ...)
*/

//Example-
let n = 10;
function calSum(n, callback) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    callback(sum);
}


calSum(n, (sum) => {
    //console.log(`Average is ${sum / n}`);
});

/* How to create callback */
const message = function () {
    //console.log('This msg is print after 3 second')
}

setTimeout(message, 3000);

//There is a built-in method in JavaScript called “setTimeout”, which calls a function or evaluates an expression after a given period of time (in milliseconds). So here, the “message” function is being called after 3 seconds have passed. (1 second = 1000 milliseconds)


//Anonymous Function------------------------------------------------
//Alternatively, we can define a function directly inside another function, 
//instead of calling it. It will look like this:
//ex-->
setTimeout(function () {
    //console.log('This msg is execute after 3 second');
}, 3000);

//As we can see, the callback function here has no name and a function definition without a name in JavaScript is called an “anonymous function



//Callback as an Arrow Function
setTimeout(() => {
    console.log("This message is shown after 3 seconds");
}, 3000);


//callback function also used for event declaration in javascript

