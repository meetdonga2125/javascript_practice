// promise // future value // promise is object
// promise is feature of browser not javascript

// status - pending, fulfilled(resolve), reject(value='promice is rejected')
// value - undefined(in pending status)

// console.log('script start !!!!')
// const bucket = ['coffee','chips','vegetables','salt','rice'];

// // Promise ---> constructor function


// // promise create phase
// const friedRicePromise = new Promise((resolve,reject) => {
//     if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
//         resolve('Fried Rice');  // resolve is method or function
//     }else{
//         reject("Couldn't do it")
//     }
// })

// promise consume phase  // browser consumes a promise and asynchronous work
// how to consume
// then(callback function) then take a callback function as input and receive a resole value as callback argumets

// friedRicePromise.then(
    // jab promise resolve hoga
//     (resolveValue) => {
//     console.log("lets eat ", resolveValue)
//      },
   // jab promise reject hoga
//     (rejectValue) => {
//     console.log(rejectValue)
//     })



// friedRicePromise.then(
//     (resolveValue) => {
//     console.log("lets eat ", resolveValue)   // promise run in microtask que event loop first execute whatever inside microtask que
//      },
//   ).catch(  (rejectValue) => {
//     console.log(rejectValue)
//     })

// setTimeout(() => {
//     console.log('hello from settimeout')  // setTimeOut callback function run in callback que
// },0)

// for(let i = 0; i<=100; i++){
//     console.log(Math.random(),i)
// }


// console.log('script end !!!!')


// function returnPromise(){
//     const bucket = ['coffee','chips','vegetables','salt','rice'];
//     new Promise((resolve,reject) => {
//         if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
//             resolve('Fried Rice');  // resolve is method or function
//         }else{
//             reject("Couldn't do it")
//         }
//     })
// }

// returnPromise().then(
//     (resolveValue) => {
//     console.log("lets eat ", resolveValue)   // promise run in microtask que event loop first execute whatever inside microtask que
//      },
//   ).catch(  (rejectValue) => {
//     console.log(rejectValue)
//     })


// function myPromise(){
//     return new Promise((resolve,reject) => {
//         const value = true;
//         setTimeout(() => {
//             if(value){
//                 resolve()
//             }else{
//                 reject()
//             }
//         },2000)
//     }
// )} 

// myPromise()
//     .then(() => {console.log("resoleved")})
//     .catch(() => console.log('rejected'))


// Promise.resolve
// promise chaining

// const myPromise = Promise.resolve(5);
// myPromise.then(value => {
//     console.log(value)
// })

// then()
// then method hamesha promise return karta hai

// function myPromise(){
//     return new Promise((resolve,reject) => {
//         resolve('foo')
//     })
// }
// myPromise()
//     .then(value => {
//        console.log(value);
//        value += "bar";
//        return value;            
//     //    return Promise.resolve(value);  // internally javascript return promise 
// })
//     .then((value) => {
//         console.log(value)
//         value += 'baaz'
//         return value
// })
//     .then(value => {
//         console.log(value); 
//     })


const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


function changeText(element,text,color,time){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }else{
                reject('element not found');
            }
        },time)
    })
}

const returndPromise = changeText(heading1,'one','red',1000)
returndPromise.then(() => changeText(heading2,'two','purple',1000))
              .then(() => changeText(heading3,'three','green',1000))
              .then(() => changeText(heading4,'four','orange',1000))
              .then(() => changeText(heading5,'five','black',1000))
              .then(() => changeText(heading6,'six','cyan',1000))
              .then(() => changeText(heading7,'seven','navy',1000))
              .catch((error) => {
                alert(error)
              })


