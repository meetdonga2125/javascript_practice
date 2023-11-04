// Sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranted
// unique items only (no duplicate allowed)

const numbers = new Set([1,2,2,3]);
console.log(numbers)

console.log(numbers[0])

console.log(numbers)


const numberSet = new Set();
numberSet.add(1)
numberSet.add(2);
numberSet.add(['item1','item2']);   // both array have diff address
numberSet.add(['item1','item2']);
console.log(numberSet)

console.log(numberSet.has(1))

if(numbers.has(1)){
    console.log("1 is present")
}else{
    console.log("1 is not present")
}
console.log(numbers)

for(let number of numbers){                 // sets are iterable
    console.log(number);
}

const myArray = [1,2,4,4,5,6,6,5]
const uniqueElement = new Set(myArray)
console.log(uniqueElement)
console.log(myArray)
// console.log(uniqueElement.length)
let length = 0
for(ele of uniqueElement){
    // length +=1
    length++;
}
console.log(length)



// ------------------------------------- Maps --------------------------------------------//


// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// difference between maps and objects


// objects can only have string or symbol
// as key

// in maps you can use anything as key
// like array, number, string


// ---------------------------- object literal ----------------------------- //
// key --> string
// key --> symbol
// const person = {
//     firstName : 'harshit',
//     age:7,
//     1:'one',
// }

// console.log(person.firstName)
// console.log(person.age)
// console.log(person[1])


// for(let key in person){
//     console.log(typeof key);
// }


// key value pair
const myMap = new Map([['firstName','Meet'],['age',7]])
console.log(myMap)
const person = new Map();
person.set('firstName','Harshit')
person.set('age',7)
person.set(1,'one')
person.set([1,2,3],'onetwothree')
person.set({1:'one'},'onetwothree')
console.log(person)

console.log(person.get(1))
console.log(person.get('firstName'))

for(let key of person.keys()){
    console.log(key, typeof key)
}

for(let key of person){
    console.log(key)
}

for(let [key,value] of person){
    console.log(key,value)
}

// let myObj = {
//     fname : 'meet',
//     lname : 'donga',
//     age   : 24,
//     city  : 'Gandhinagar',
// }

// console.log(myObj.keys)

// for(let key in myObj){
//     console.log(key)
// }

// for(let key in myObj){
//     console.log(myObj[key])
// }

// console.log(Object.keys(myObj))
// console.log(Object.values(myObj))

// for(key of Object.values(myObj)){
//     console.log(key)
// }


const person1 = {
    id:1,
    firstName:"Meet"
}

const extraInfo = new Map();
extraInfo.set(person1,{age:8,gender:'male'})
console.log(person1.id)
console.log(extraInfo.get(person1))
console.log(extraInfo.get(person1).age)
console.log(extraInfo.get(person1).gender)
