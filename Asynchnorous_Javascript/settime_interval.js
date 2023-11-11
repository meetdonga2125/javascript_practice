// console.log('script start')

// // setTimeout(callback_function,timeInMiliSecond)

// setTimeout(() => {
//     console.log("Inside setTimeOut")
// }, 1000);


// for(let i = 0; i<=100; i++){
//     console.log('kya haal chaal')
// }

// console.log('script end')


//setInterval

// console.log('script start')
// setInterval(() =>{
//     console.log(Math.floor(Math.random()*10))
// },1000)

// console.log("script end")



// const body = document.body;
// const button = document.querySelector("button");

// const intervalId = setInterval(() => {
//     const red = Math.floor(Math.random() * 126)
//     const green = Math.floor(Math.random() * 126)
//     const blue = Math.floor(Math.random() * 126)
//     const rgb =   `rgb(${red},${green},${blue})`
//     console.log(rgb)
//     document.body.style.background = rgb;
// },1000)

// button.addEventListener("click", () => {
//     clearInterval(intervalId);
//     button.textContent = document.body.style.background;;
// });

// console.log(intervalId);


// understand callback

function myFunc(callback){
    console.log('Funtion is doing some task')
    callback();
}

function myFunc2(){
    console.log("function is doing task2")
}

myFunc(myFunc2); // instead of this
// myFunc2();

myFunc(() => {
    console.log("function is doning task")
})

function getTwoNumbers(number1,number2,callback){
    console.log(number1,number2)
    callback(number1,number2)
}

function addTwoNumbers(num1,num2){
    console.log(num1+num2)
}

getTwoNumbers(4,5)
getTwoNumbers(4,5,addTwoNumbers)






