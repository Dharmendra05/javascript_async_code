//Asynchronous code using await and async
//Example---1-->
//The async keyword at line 10 means that the function test will always return a promise.
//The await keyword at line 12 means that the code execution will stop until the promise returned by job() is resolved.
/*
function job() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 500, 'Hello World 1')
    })
}

async function test() {
    let msg = await job();
    console.log(msg)

    return 'Hello World 2'
}

test().then((msg) => {
    console.log(msg)
});
*/



//Error Handling in async and await---------------------------------------------------

//Use a simple try { ... } catch (error) { ... }

//Example---Error handle by try catch 
/*
function job() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error Happened');
        }, 500)
    })
}


async function test() {
    try {
        let msg = await job()
        console.log(msg)
        return 'Hello World'
    } catch (error) {
        console.error(error)
        return 'Error happened during test'
    }
}


test().then((data) => console.log(data));

*/

//If you want to return a rejected promise in an async function, you just have to throw an error.
//Look at this example:
/*
async function job() {
    throw new Error('Access denied')
}

job().then((msg) => console.log(msg))
    .catch((error) => console.log(error));
*/


///await can only be used in an async function--------
/*
async function job() {
    return 'test';
}

async function main() {
    console.log(await job());
}
main();
*/
//output :-- test



//Call multiple functions with await in parallel-------------------
//Example--1-->Sequential multiple awaits
const start = Date.now();
function timeLog(text) {
    console.log(`${Date.now() - start}ms - ${text}`);
}

function job() {
    return new Promise(function (resolve, reject) {
        timeLog('Job start');
        setTimeout(function () {
            timeLog('Job done');
            resolve('Hello world');
        }, 500);
    });
}

async function main() {
    let message1 = await job(),
        message2 = await job(),
        message3 = await job();

    timeLog(message1);
    timeLog(message2);
    timeLog(message3);
}

main();

//output
/*
7ms - Job start
511ms - Job done
512ms - Job start
1013ms - Job done
1013ms - Job start
1514ms - Job done
1514ms - Hello world
1514ms - Hello world
1514ms - Hello world
*/



//Example--Parallel multiple awaits---promise.all
const start = Date.now();
function timeLog(text) {
    console.log(`${Date.now() - start}ms - ${text}`);
}

function job() {
    return new Promise(function (resolve, reject) {
        timeLog('Job start');
        setTimeout(function () {
            timeLog('Job done');
            resolve('Hello world');
        }, 500);
    });
}

async function main() {
    let messages = await Promise.all([job(), job(), job()]);

    messages.forEach(function (message) {
        timeLog(message);
    });
}

main();

//output
/*
7ms - Job start
10ms - Job start
10ms - Job start
511ms - Job done
511ms - Job done
511ms - Job done
511ms - Hello world
511ms - Hello world
511ms - Hello world
*/



//You can use the await keyword even if the result is not a promise.----------------------
//Exa---
function job() {
    return 'Hello world';
}

async function main() {
    let message = await job();

    console.log(message);
}

main();




