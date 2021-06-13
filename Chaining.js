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

//answer---data 1 is result of job 1
//data 2 is result of job 2
//data 3 is Hello World



//Example---11--->what is output
function job() {
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

//Output:-//error Occured
//Sucess 4


//Example---12--->

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


/*output--->
successFully Resolved
error
Error Caught
*/


//Example---13---->what is output
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



/*output
successfully resolved..
Defeat
got error....
Error Caught
sucesstest
*/