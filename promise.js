/*A promise in JavaScript is similar to a promise in real life.
When we make a promise in real life, it is a guarantee that we are going to do something in the future.
 Because promises can only be made for the future.
 ---->When we define a promise in JavaScript, it will be resolved when the time comes,
  or it will get rejected.

---------->Promises in JavaScript

First of all, a Promise is an object. There are 3 states of the Promise object:
1-Pending: is the initial state.
2-Resolved: indicates that the promised operation was successful.
3-Rejected: indicates that the promised operation was unsuccessful.


//creating a simple promise
1-A promise is created using a constructor that takes a call back function with two arguments.
2-The code needed to perform the promised task is written. In this example, it is assumed that the code executes successfull.
3-If the task is successful, the promise is resolved.
4-If the task is unsuccessful, then the promise is rejected.
5-The then() method is called when the promise is resolved, ​and the
 catch() method is called if the promise is rejected or if there was an error during the code execution.
 */

//Ex-

let promise = new Promise((resolve, reject) => {
    let task_performed = false;
    if (task_performed) {
        resolve('The promised task was performed successfully.');
    } else {
        reject('The promised task was not performed.');
    }
});

promise.then((data) => console.log(data))
    .catch((error) => console.log(error));



//Using Promise.all()-------------------------------------------------------------------
//The Promise.all() method returns a single promise that resolves when all of the passed-in promises have resolved.
// It rejects if one of the promises is rejected.

//Example-2---

// let promise1 = new Promise((resolve, reject) => {
//     resolve(1);
// });

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 2);
// });

// Promise.all([promise1, promise2]).then(() => {
//     console.log('Both the promise have been resolved successfully');
// });



//Using Promise.race() --------------------------------------------------------
/*The Promise.race() method returns a promise that resolves or rejects as soon as one of the promises resolves
 or rejects. The fromRes method​ contains the value from the promise that is resolved first.
 */


let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve(2), 2000);
});

let promise2 = new Promise((resolve, reject) => {
    resolve(1)
});

Promise.race([promise1, promise2]).then((val) => {
    console.log(val);
});



