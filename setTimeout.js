/* DEfination:- setTimeout allow us to run a function once after the interval of time.
 syntax--> setTimeout(callback, delay_timing in ms, arg1, arg2);
  callback/function ---->it take function refrence for a function/not a function call.
  //it except only refrence of function.....


// function first(){
//  setTimeout(()=>{
//     console.log('this timeout is off for 2seconds');
//  }, 2000);
// }

// second();

// function second(){
//   setTimeout(()=>{
//      console.log('this is first timeout');
//   }, 1000);
// }


// first();


// function third(){
//     setTimeout(()=>{
//       console.log('this is third timeout but not time given')
//     });
// }

// third();


// function four(){
//     setTimeout(()=>{
//       console.log('this is a last function and run on 50 miliseconds');
//     }, 50);
// }

// four();

// function five(){
//  console.log('this is not timeout function');
// }

// five();



// function inOrder(){
//     let logOne = setTimeout(function(){
//         console.log('one!');
//     }, Math.random() * 1000);
    
//     let logTwo = setTimeout(()=>{
//        console.log('two!');
//     }, Math.random() * 1000);
// }

// inOrder();


EXample - 1*/
//  function sayHii(){
//      console.log(`Hii Good Morning`);
//  }

//  setTimeout(sayHii, 1000);


//with arguments-------
// function sayHii(firstName, LastName){
//     console.log(`Hii ${firstName} ${LastName}.`);
// }

// setTimeout(sayHii, 2000, 'Dharmendra', 'singh');




////exemaple ---2

// setTimeout(()=>console.log('hello'), 1000);


//Example----3------------------------->Canceling with clearTimeout

// let timeId = setTimeout(()=>{
//        console.log('run a time out function')
// }, 1000);


// clearTimeout(timeId);



//Example -----4 ---------------> nested setTimeOut...............



// let timerId = setInterval(() => console.log('tick'), 2000);

// let timerId = setTimeout(()=>{
//     console.log('first');
//  setTimeout(()=>{
//        console.log('second');
//     setTimeout(()=>{
//         console.log('this is 3rd nested timeout');
//     }, 1000);
//     }, 2000);
// }, 5000);



//Example-5-we need to write a service that sends a request to the server every 5 seconds asking for data, but in case the server is overloaded,
// it should increase the interval to 10, 20, 40 seconds


// let delay = 500;

// let timerId = setTimeout(()=>{
//   console.log('send a request....');
//   if('request is failed'){
//       delay *= 2;
//   }
// }, delay);


// let timerId = setTimeout(()=>{
//     let number =  Number((Math.random() * 10).toFixed(0));
//     console.log(`function is taking ${delay} and number is ${number}`);
//     if(number<5){
//         delay *= 2;
//     }
//      setTimeout(()=>{console.log(`function is ${delay} and number is ${number}`)}, delay)
// }, delay);



//Example------6------------------setIntervals--------It runs multiple time and print after interval continously------------------->

// function first(a, b){
//     setInterval(() => {
//       console.log(`two number sum is : ${a+b}`);   
//     }, 1000);
// }

// first(5, 10);


// two number sum is : 15
// two number sum is : 15
// two number sum is : 15
// two number sum is : 15
// two number sum is : 15
// two number sum is : 15
// two number sum is : 15
// two number sum is : 15
// two number sum is : 15
// two number sum is 




//Example -----7-----------------Zero delay setTimeout------------------------>

//There’s a special use case: setTimeout(func, 0), or just setTimeout(func).
//minimum one setTimeout function take 1ms but execute after sync code....

// let start = Date.now();
// let times = [];
// // console.log(start);
// setTimeout(()=>{
//  times.push(Date.now()-start);
//    if(start < Date.now()){
//        console.log(times);
//    }
//    setTimeout(()=>{
//     console.log(times);
//    });
// });


// console.log(times);


/*
->Methods setTimeout(func, delay, ...args) and setInterval(func, delay, ...args) allow us to run the func once/regularly after delay milliseconds.
To cancel the execution, we should call clearTimeout/clearInterval with the value returned by setTimeout/setInterval.
->Nested setTimeout calls are a more flexible alternative to setInterval, allowing us to set the time between executions more precisely.
->Zero delay scheduling with setTimeout(func, 0) (the same as setTimeout(func)) is used to schedule the call “as soon as possible, but after the current script is complete”.
->The browser limits the minimal delay for five or more nested calls of setTimeout or for setInterval (after 5th call) to 4ms. That’s for historical reasons.
->Please note that all scheduling methods do not guarantee the exact delay.

For example, the in-browser timer may slow down for a lot of reasons:
The CPU is overloaded.
The browser tab is in the background mode.
The laptop is on battery.
All that may increase the minimal timer resolution (the minimal delay) to 300ms or even 1000ms depending on the browser and OS-level performance settings.
*/



//Example -8:->Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// Make two variants of the solution.

// function printNumbers(from, to){
//   for(let index=from;index<=to;index++){
//     if(index++){
//       setTimeout(()=>{
//         console.log(index);
//       }, 5000);
//     }
//   }
// }

// printNumbers(5, 20);


// var i = 0;

// setTimeout(() => console.log(i), 100);




//Example:---9-------

// function printNumbers(from, to) {
//   let timerId = setInterval(() => {
//     console.log(from++);
//     if (from > to) {
//       clearInterval(timerId);
//     }
//   }, 1000);
// }

// printNumbers(5, 20);




//Example-10----------------------------

// function async(){
// setTimeout(()=>{
//  console.log('I am a async code .....');
// });

// console.log('I am a sync code ....');
// }


// async();


//Example-11--------Asynchronous code is always executed after the main thread.

// setTimeout(()=>{
//     console.log('I am an asunchrounous message..');
// });

// console.log('Test 1');

// for(let i=0;i<1000;++i){
//   doSomeStuff();
// }

// function doSomeStuff(){
//   return 1+1;
// }


//Example---12---------------------------------------------

// let counter = 0;

// let timer = setInterval(function() {
//     console.log('I am an asynchronous message');

//     counter += 1;

//     if (counter >= 5) {
//         clearInterval(timer);
//     }
// }, 1000);

// console.log('I am a synchronous message');


// setTimeout and setInterval are the only native functions of the JavaScript
// to execute code asynchronously.



//Example---13----------------------------------

// let fs = require('fs');

// fs.readFile('data.txt', 'utf8', function(error, data) {
//     if (error) {
//           console.log(error);
//     }

//     console.log("Asynchronous message. Content of test.txt:", data);
// });

// console.log('Synchronous message');
function SetTimeout() {
  setTimeout(() => {
    console.log('parent');
    setTimeout(() => {
      console.log('child');
    }, 1000);
  }, 2000);
}

SetTimeout();















































































































