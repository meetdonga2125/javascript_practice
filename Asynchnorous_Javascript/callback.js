// function hello(){
//     console.log('hello world')
// }

// hello()


// function addTwoNumbers(num1,num2,callback){
//     if(typeof num1 === 'number' && typeof num2==='number'){
//         callback(num1,num2)
//     }else{
//         console.log("Wrong Data Type")
//     }
//     console.log(num1,num2)
//     callback(num1,num2)
// }

// function sumOfNumber(num1,num2){
//     console.log(num1+num2)
// }

// addTwoNumbers(10,20,(num1,num2) => {
//     console.log(num1+num2)
// })


// addTwoNumbers('10',20,sumOfNumber)


// function myFunc(callback){
//     console.log('function is doing task1')
//     callback(4,5)
// }

// myFunc((num1,num2) => {
//     console.log('function is doing task2',num1,num2)
// })



// function getTwoNumbersAndAdd(number1,number2,onSuccess,onFailure){
//     if(typeof number1 === "number" && typeof number2 === 'number'){
//         onSuccess(number1,number2)
//     }else{
//         onFailure()
//     }
// }

// getTwoNumbersAndAdd(4,4,(num1,num2) => {
//     console.log(num1 + num2)
// }, () => {
//     console.log("wrong data type")
//     console.log('please pass numbers only')
// })




// callbacks, callback hell, pyramid of doom
// asynchronous programming


// const heading1 = document.querySelector(".heading1");
// setTimeout(() => {
//     heading1.textContent = "Heading 1"
//     heading1.style.color = 'violet'
// },1000)

// In real life all function are run in order without order our applicaiton doesn't work
// ex. first of all fetch the all data after that processing data but without order our application functionality disrupted

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// setTimeout(() => {
//     heading1.textContent = "Heading 1"
//     heading1.style.color = 'violet'
//     setTimeout(() => {
//     heading2.textContent = "Heading 2"
//     heading2.style.color = 'red'
//     },1000)
// },1000)


// Text    Deley     Color


// one     1s        Violet
// two     2s        purple
// three   2s        red
// four    1s        pink
// five    1s        green
// six     3s        blue
// seven   1s        brown

// callback hell // nested callback // it's very confusing // readibility and maintainbility not good
// setTimeout(() => {
//     heading1.textContent = 'one';
//     heading1.style.color = 'violet';
//     setTimeout(() => {
//         heading2.textContent = 'two';
//         heading2.style.color = 'purple'
//         setTimeout(() => {
//             heading3.textContent = 'three';
//             heading3.style.color = 'red'
//             setTimeout(() => {
//                 heading4.textContent = 'four';
//                 heading4.style.color = 'orange'
//                 setTimeout(() => {
//                     heading5.textContent = 'five';
//                     heading5.style.color = 'green'
//                     setTimeout(() => {
//                         heading6.textContent = 'six';
//                         heading6.style.color = 'blue'
//                         setTimeout(() => {
//                             heading7.textContent = 'seven';
//                             heading7.style.color = 'brown'
//                         },1000)
//                     },3000)
//                 },1000)
//             },2000)
//         },2000)
//     },1000);
// },1000)



function changeText(element,text,color,time,onSucessCallback,onFailureCallback){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSucessCallback){
                onSucessCallback();
            }
        }else{
            if(onFailureCallback){
                onFailureCallback()
            }
            // console.log('your element does not exist')
        }
    },time)
}

// pyramid of doom
changeText(heading1,'one','violet',1000,()=>{
    changeText(heading2,'two','purple',1000,()=>{
        changeText(heading3,'three','red',1000,()=>{
            changeText(heading4,'four','pink',1000,()=>{
                changeText(heading5,'five','orange',1000,()=>{
                    changeText(heading6,'six','cyan',1000,()=>{
                        changeText(heading7,'seven','blue',1000,()=>{

                        },()=>{console.log("Heading1 does not exist")})
                    },()=>{console.log("Heading2 does not exist")})
                },()=>{console.log("Heading3 does not exist")}) 
            },()=>{console.log("Heading4 does not exist")})
        },()=>{console.log("Heading5 does not exist")})
    },()=>{console.log("Heading6 does not exist")})
},()=>{console.log("Heading7 does not exist")})
                                




