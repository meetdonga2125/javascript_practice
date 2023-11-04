//booleans & comparision operator 

//booleans - true/false

// '==' , '==='

let a = '7'
let b = 7

console.log(a==b)     // '==' checks only value it doesn't check the datatypes of variable whether it is same or not
console.log(a===b)    // '===' checks not only value but also check the datatype of variable if both are same it will give the true otherwise gives the false


//  != vs !==

let c = '7'
let d = 7

console.log(c != d)    // same worl as '=='
console.log(c !== d)   // same work as '==='

// truthy  and falsy value  //

// falsy values //

// false, 
// ""
// null
// undefined
// 0

// Truthy Values //

// "abc"
// 1,-1

let falsyValue = ""

if(falsyValue){
    console.log('Yes, I am falsy Value')
}else{
    console.log("firstName is empty")
}

// null

let nullValue = null

if(nullValue){
    console.log('Yes, I am null Value')
}else{
    console.log('nullValue is empty')
}



// ternary operator

// let myAge = 4;
// let drink;

// if(myAge>=5){
//     drink = 'coffee'
// }else{
//     drink = 'milk';
// }
// console.log(drink)

// with ternary operator

let myAge = 3;
let drink = myAge >= 5 ? "coffee" : "milk";             // (? = true)(: = false)
console.log(drink);

//and / or operator

// let firstName = 'Meet'
// let age = 24

// if(firstName[0] === 'M' && age>18){
//     console.log("Name starts with H and above 18")
// }else{
//     console.log("You are wrong")
// }


// let firstName = 'Meet'
// let age = 24

// if(firstName[0] === 'H' || age>18){
//     console.log("Name starts with H and above 18")
// }else{
//     console.log("You are wrong")
// }


// ------------------------------ nested if else ------------------------------------ //

// let winningNumber = 19;
// let userGuess = prompt('Guess a number');
// userGuess = parseInt(userGuess); 

// if(userGuess===winningNumber){
//     console.log('You won the match')
// }else{
//     if(userGuess<winningNumber){
//         console.log('Your guess is low!!')
//     }else{
//         console.log('Your guess is high !!')
//     }
// }


let tempInDegree = 20;
if(tempInDegree < 0){
    console.log('extremely cold outside');
}else if(tempInDegree < 16){
    console.log('It is cold outside')
}else if(tempInDegree < 25){
    console.log('wheather is okay')
}else if(tempInDegree < 35){
    console.log('lets go for swim')
}else if(tempInDegree < 45){
    console.log('turn on Ac')
}else{
    console.log("too hot")
}

console.log('hello')


// switch statement

let day = 2;

switch(day){
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thrusday');
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break                           
}