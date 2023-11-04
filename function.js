// function call,invoke,run all are same

// function myFunc(parameter){ return parameter}
// myFunc(arguments)


// Function Declaration //

function singHappyBirthday(name){
    console.log(`Happy Birthday to you dear ${name}`)
}

singHappyBirthday('meet')
singHappyBirthday('harshit')

// sum of two numbers //

function sumTwoNumbers(a,b){
    return a+b;
}

const returnvalue = sumTwoNumbers(40,524);
console.log(returnvalue);

// odd-even function //

function oddEven(num1){
    if (num1%2===0){
        console.log(`${num1} is even number`)
    }else{
        console.log(`${num1} is odd number`)
    }
}

oddEven(458316465456)
oddEven(13)
oddEven(85627)


// isEven 
// output : true, false

function isEven(number){
    if(number % 2 ===0){
        return true;
    }
    return false;
}

console.log(isEven(10))
console.log(isEven(17))

function isEven(number){
    return number%2 === 0;
}
console.log(isEven(4));
console.log(isEven(17));

//input   : string
//output : firstCharacter


function firstCharacter(name){
    return name[0];
}

console.log(firstCharacter('Meet'))
console.log(firstCharacter("Donga"))


// function 
// input : array , target (number)
// output : index of target if target present in array
// return keyword always execute last after that no execution happened

function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if (array[i] === target){
            return i;
        }
    }
    return -1;
}

const myArray = [1,3,8,85,100,50]
const ans = findTarget(myArray,100)
console.log(ans)

// for(let i = 0; i<10 ; i++){
//     if(i%2===0){
//         console.log('even')
//     }
//     else{
//         console.log('odd')
//     }
// }
// console.log('Hello world')




// Function Expression (anonymous funciton) //
// Function store in variable

const myFunc = function(){
    console.log('Happy Birthday')
}
myFunc();

let sum = 0;

const mySum = function(numbers){
   for(number of numbers){
    sum += number
   }
   return sum;

}

console.log(mySum([1,2,3,4]))



// arrow function //

const sumThreeNumbers = (num1,num2,num3) => {
    return num1+num2+num3;
}

console.log(sumThreeNumbers(10,25,24));


const isEvenNum = (number) => {
    if (number%2 === 0){
        console.log(`Given ${number} is Even`)
    }
    return -1
}

isEvenNum(16);
console.log(isEvenNum(19));


const isEvenNum2 = number => number%2 === 0;
console.log(isEvenNum2(4));

const firstChar = anyString => anyString[0];
console.log(firstChar('harshit'))


//hoisting//

hello()   // only In function declaration we can invoke function before it's initialization it's called hoisting

function hello(){
    console.log("hello world")
}


// Functions inside function

const app = () => {
    const myFunc = () => {
        console.log('hello from myFunc')
    }
    const mySum = (num1,num2) => num1 + num2;
    const mul = (num1,num2) => num1*num2;
    
    myFunc()
    console.log(mySum(45,21))
    console.log(mul(45,28))
}

app()


// lexical scope  //

const myvar = "value1"   // Global Scope

function myApp(){
    // const myvar = 'hello'
    const myFunc = () => {
        // const myvar = 'hello'
        console.log('inside myFunc',myvar)
    }
    console.log(myvar)
    myFunc()
}

myApp()

// ex.2

const myVar = "value1"   // Global Scope

function myApp1(){
    // const myvar = 'hello'
    const myFunc = () => {
        
        const myFunc2 = () =>{
            console.log('inside myFunc',myVar)
        }
        myFunc2()
    }
    console.log(myVar)
    myFunc()
}

myApp1()


// block scope vs function scope => {} => if,for,while,do-while all are in block scope
// let and const are block scope
// var is function scope

{
    let firstName = 'meet';   // you can only access let and const variable inside block scope not outside of the scope
    // console.log(firstName)
}
// console.log(firstName)

{
    const firstName = 'meet'
    // console.log(firstName)
}
// console.log(firstName)

{
    // var firstName = 'Meet';   // you can acces var variable inside and outside of block scope
}
// console.log(firstName)
{
    // console.log(firstName)
}

if(true){
    let firstName = 'Meet'
    // console.log(firstName)
}
// console.log(firstName)


function myApp3(){

    const myFunc = () =>{
        let firstName = 'Meet'
        console.log(firstName)
    }
    if(true){
        var firstName = 'Meet'
        console.log(firstName)
    }
    
    // console.log(firstName)
    myFunc()

}

// console.log(firstName)
myApp3()


// default Parameters

// function mySum2(num1,num2){
//     if(typeof num2 === "undefined"){
//         num2 = 10;
//     }
//     return num1 + num2;
// }

function mySum2(num1,num2=52){
    return num1 + num2;
}

console.log(mySum2(10))



// rest parameters

function myFunction(a,b,...c){
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is`,c)
    console.log(typeof c)
    console.log(Array.isArray(c))
}

myFunction(40,54,78,54,785,41,52,56,89)


function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number
    }
    return total
}

const answer = addAll(10,548,54,854,7548,452,4589,5632,458,12,45)
console.log(answer)


// parameter destructuring

//object
//react

const person = {
    firstName : "harshit",
    gender: "male",
}

function printDetails(obj){
    console.log(obj.firstName);
    console.log(obj.gender);
}

printDetails(person);

// with destructuring

function printDetail({firstName,gender}){
    console.log(firstName)
    console.log(gender)
}
printDetail(person);


// ------------ callback function----------- // function take a callback function as a argument like function take a array,object as a argument................


function mFunc1(name){
    console.log("inside mFunc")
    console.log(`Your name is ${name}`)
}

function mFunc(callback){
    console.log('I took callback funciton as argument')
    callback('Meet')
}

mFunc(mFunc1)




// --------------------------------------- function returning a function ----------------------------------------------//

// function myGreet(){
//     function hello(){
//         console.log("Hello World")
//     }
//     return hello;
// }

// const greet = myGreet()
// greet();


function myGreet(){
    function hello(){
        return 'hello world';
    }
    return hello;
}

const greet = myGreet()
console.log(greet());



function hello(){
    console.log('hello world')
}

// javascript function ===> function + object

console.log(hello.name)
// hello()

// you can add your own properties

hello.myOwnProperty = 'very unique value';
console.log(hello.myOwnProperty);

// function provides more usefull properties

console.log(hello.prototype);  // {} prototype is free space

// only functions provides prototype property

if(hello.prototype){
    console.log('prototype is present')
}else{
    console.log('prototype is not present')
}

hello.prototype.abc = 'abc';
hello.prototype.xyz = 'xyz';
hello.prototype.sing = function(){
    return 'hiiiiiiiiiiiiiiiii'
}
console.log(hello.prototype)


// __proto__, [[prototype]] is one type of reference
// prototype is diffrent form __proto__, and [[prototype]]
// prototype is one type of object we can store function properties










