//Example-1--Asynchronous code using setTimeout

/*
setTimeout(function () {
    console.log('I am Asynchronous message');
}, 1000);

console.log('I am Synchronous Message');
*/

//Example-2---Asynchronous code is always executed after the main thread.

/*
 Even with a 0 millesecond delay, the asynchronous message will be displayed after the synchronous message.
  This is because any function given to the setTimeout function will be executed asynchronously.
*/

// setTimeout(function () {
//     console.log('I am Asynchronous message :-');
// })

// console.log('Test 1');

// for (let i = 0; i < 1000; i++) {
//     doSomeStuff();
// }

// console.log('Test 2');

// function doSomeStuff() {
//     return 1 + 1
// }



//Example--3---Asynchronous code using setInterval
/*
setInterval has the same behavior as setTimeout but the code is executed multiple times.
 You have to call clearInterval to kill the timer.
 */
/*
 let counter = 0;
let timer = setInterval(() => {
    console.log('I am asynchronous message');

    counter += 1

    if (counter >= 5) {
        clearInterval(timer);
    }
}, 1000);

console.log('I am Synchronous message');
*/



//Example-4---->Single Promise
/*
let promise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('hello world');
    }, 2000);
});

promise.then((data) => {
    console.log(data);
});
*/


//Example--5-->Multiple callbacks

/*
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is Async code')
    }, 2000);
});

promise.then((msg) => {
    console.log(msg + ' 1');
});

promise.then((msg) => {
    console.log(msg + ' 2');
});

promise.then((msg) => {
    console.log(msg + ' 3');
});

*/

//Example--6->reject function //The reject function is used to trigger an error.
/*
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('we are all going to die')
    }, 2000);
});

promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error);
})
*/

//Example--7->reject function //When an error happens with multiple callbacks
/*
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('we are all going to Die....')
    }, 2000);
});


promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.error(error + ' 1');
}).catch((er) => console.log(er));

promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error + ' 2')
});

promise.then((data) => {

}).catch((error) => {
    console.log(error + '3');
});
*/



//Example -- 8--->calling resolve multiple times
//You can call resolve and reject multiple times, but this is useless.
// Once a promise is finished, it can't restart.
/*
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello world 1')
        resolve('hello world 2')
        resolve('hello world 3')
        resolve('hello world 4')
    }, 1000);
})


promise.then((data) => console.log(data))
*/




//Example --- 9 ==>
/*
function job(data) {
    return new Promise((resolve, reject) => {
        if (isNaN(data)) {
            reject('not a number')
        } else if (Number(data) % 2 === 0) {
            resolve('even')
        } else {
            resolve('odd')
        }
    });
}

job(3).then((data) => console.log(data));
job('yes').then((data) => console.log(data))
    .catch((error) => console.log(error));
job(4).then((data) => console.log(data));
*/


//Example--10--->chaining the promises
/*
let promise = jobFirst()
promise.then((data) => {
    console.log('data 1 is ' + data)
    return jobSecond()
}).then((data2) => {
    console.log('data 2 is ' + data2)
    return "Hello World"
}).then((data3) => {
    console.log('data 3 is ' + data3)
});

function jobFirst() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('result of job 1')
        }, 1000)
    })
}

function jobSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('result of job 2')
        }, 2000)
    });
}

*/


//Example---11--->what is output
/*function job() {
    return new Promise((resolve, reject) => {
        reject();
    })
}

let promise = job()


promise.then(() => console.log('Success 1'))
    .then(() => console.log('success 2'))
    .then(() => console.log('Success 3'))
    .catch(() => console.log('error Occured'))
    .then(() => console.log('Sucess 4'));
*/
//Output:-//error Occured
//Sucess 4


//Example---12--->
/*
function job(state) {
    return new Promise((resolve, reject) => {
        if (state) {
            resolve('successFully Resolved')
        } else {
            reject('error')
        }
    })
}

let promise = job(true);

promise.then((data) => {
    console.log(data)
    return job(false);
}).catch((error) => {
    console.log(error)
    return 'Error Caught'
}).then((data) => {
    console.log(data)
    return job(true)
}).catch((error) => { //this block is not working due to catch
    console.log(error)
})

*/
/*output--->
successFully Resolved
error
Error Caught
*/


//Example---13---->what is output
/*
function job(state) {
    return new Promise((resolve, reject) => {
        if (state) {
            resolve('successfully resolved..')
        } else {
            reject('got error....')
        }
    })
}

let promise = job(true);



promise.then((data) => {
    console.log(data)
    return job(true)
}).then((data2) => {
    if (data2 !== 'victory') {
        throw 'Defeat'
    }
    return job(true)
}).then((data3) => {
    console.log(data3)
}).catch((error) => {
    console.log(error)
    return job(false)
}).then((data4) => {
    console.log(data4)
    return job(true)
}).catch((error) => {
    console.log(error)
    return 'Error Caught'
}).then((data5) => {
    console.log(data5)
    return new Error('test')
}).then((data6) => {
    console.log('sucess' + data6.message)
}).catch((data) => {
    console.log('Error :' + data.message)
});

*/

/*output
successfully resolved..
Defeat
got error....
Error Caught
sucesstest
*/


//Example--14--->Promise.all
/*
function job(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Resolving', delay);
            resolve('done', + delay)
        }, delay);
    })
}



let promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);

promise.then((data) => {
    data.forEach((text) => {
        console.log(text)
    })
})

*/


//Example--15---->Promise.all fail-fast behaviour
/*
let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'p1')
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'p2')
});

let p3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1200, 'p3');
});


let p4 = new Promise(function (resolve, reject) {
    setTimeout(reject, 300, 'p4');
});

let p5 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 800, 'p5');
});


let promise = Promise.all([p1, p2, p3, p4, p5])

promise.then((data) => {
    data.forEach(x => console.log(x))
})
    .catch((error) => console.log('Error', error))
*/

/*output
Error p4
*/


//Example--16---->Promise.all with catch
/*
let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'p1')
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'p2')
});

let p3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1200, 'p3');
});


let p4 = new Promise(function (resolve, reject) {
    setTimeout(reject, 300, 'p4');
});

let p5 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 800, 'p5');
});


let promise = Promise.all([p1.catch(function () { }), p2.catch(function () { }), p3.catch(function () { }), p4.catch(function () { }), p5.catch(function () { })])

promise.then((data) => {
    data.forEach(x => console.log(x))
})
    .catch((error) => console.log('Error', error))
*/
/*output
p1
p2
p3
undefined
p5
*/


//Example--17-->Promise.race example
function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time, 'success ' + time);
    });
}

Promise.race([delay(500), delay(100)]).then(function (data) {
    console.log(data);
});
