let lastName = 'Donga'
console.log(lastName[0])
console.log(lastName[lastName.length-1])
console.log(lastName.length)


let last$name = "  Meet  "
console.log(last$name.length)
console.log(last$name.trim().length)


console.log(lastName.toUpperCase())
console.log(lastName.toLowerCase())

let newString =  lastName.slice(0,3)
console.log(newString);

//datatypes(primitive datatypes)
//string
//number
//booleans
//undefined
//null
//BigInt
//Symbol

let myNum1 = 10.4
let myNum2 = 1000
console.log(typeof last$name)
console.log(typeof myNum1)
console.log(typeof myNum2)


//convert number to string
let age = 22;
// age = age + ""
age = String(age)
console.log(typeof age)

//convert string to number
let myStr = "34"
// myStr = +"34"
myStr = Number(myStr)
console.log(typeof myStr)


// template string

let myFname = 'Meet'
let myLname = 'Donga'
let myName = `My name is ${myFname} and My last Name is ${myLname}`
console.log(myName)


//undefined

let myFname1
console.log(typeof myFname1)

//null

let myVariable = null
console.log(myVariable)
console.log(typeof null) // typeof null is object, it's a bug,error in javascript

console.log(typeof String)

console.log(typeof Array)

console.log(String.prototype)

console.log(Number.MAX_SAFE_INTEGER)

let myString = 'Hello World'
console.log(myString.indexOf('e'))
console.log(myString.includes('W'))


let my_string = 'Meet Donga'
console.log(my_string.split(" "))
console.log(my_string.padEnd(15,'a'))
console.log(my_string.slice(0,4))
console.log(my_string.slice(4).trim())
console.log(my_string.length)
console.log(my_string.replace('Meet','Preet'))
console.log(my_string.startsWith("M"))


for(let i=0; i<my_string.length; i++){
    console.log(my_string[i])
}
console.log(my_string.substring(5,8))
console.log(my_string.charAt(5))

