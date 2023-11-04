// intro to arrays
// arrays are reference type
// how to create arrays
// arrays are ordered collecton ot items 


let fruits = ['Apple','Banana','Pinaple','Orange','chiku','watermelon']
fruitLen = fruits.length
console.log(fruitLen)

fruitsArray = []
for(i=0; i<fruits.length; i++){
    if (i==3){
        break
    }
    console.log(fruits[i])
}

console.log(fruits)

let myFunc = function(array){
    for(i==0; i<array.length; i++){
        console.log(array[i])
    }
    console.log("Yes, I am function")
}

myFunc(fruits)

// console.log(String(10)*"*")
for(value of fruits){
    console.log(value)
}

for(key in fruits){
    console.log(key)
}

for(key in fruits){
    console.log(fruits[key])
}


// arrays are mutable //


fruits[4] = "grapes"
console.log(fruits)

console.log(typeof fruits)
console.log(Array.isArray(fruits))


// Array push,pop  

// push ---> add element at a last position

fruits.push("papaiya")
console.log(fruits)

// pop ---> last element removed
let poppedFruit = fruits.pop();
console.log(poppedFruit);


// Array shift,unshift

//unshift ---> add element at starting point

fruits.unshift('papaiya')
console.log(fruits)

// shift ---> starting element removed

shiftFruit = fruits.shift();
console.log(shiftFruit)

fruits.splice(2,2,"Chiku","jamfal")
console.log(fruits)
// console.log('I have benn spliced',spliceFruit)

const fruitsSplice = ["Banana", "Orange", "Apple", "Mango"];

fruitsSplice.splice(2, 0, "Lemon", "Kiwi");
console.log(fruitsSplice)

let fruitsSlice = fruits.slice(0,2)
console.log(fruitsSlice)



//primitive vs reference data types


//primitive ---> It store values in different address so if we change in one variable it will not affect the second variable
// bcz of both of have different address
let num1 = 6;
let num2 = num1;
console.log("value of num1 is",num1)
console.log("value of num2 is",num2)

num1++
console.log("value of num1 is",num1)
console.log("value of num2 is",num2)

num1--
console.log(num1)


//reference types  ---> stack, heap --> array store in heap and in stack array store as pointer and in both arrays they have a 
// different pointer but both of have same address so if we change in array1 it will also change the array2

// let array1 = ['item1','item2']
// let array2 = array1

// console.log("array1",array1)
// console.log("array2",array2)
// console.log(array1===array2)
// array1.push('item3')

// console.log("array1",array1)
// console.log("array2",array2)

// how to clone an array

let array1 = ['item1','item2']
// let array2 = ['item1','item2']
// let array2 = array1.slice(0);
// let array2 = [].concat(array1)
//new way
// spread operator
let oneMoreArray = ['item3','item4']
let array2 = [...array1, ...oneMoreArray]  // using spread operator 
array1.push('item3')
console.log(array1===array2)
console.log(array1)
console.log(array2)

// for loop in array 

let myFruit = ['apple','mango','grapes','banana']
console.log(myFruit.length)
console.log(myFruit[0])
console.log(myFruit[myFruit.length-1])


let myFruit2 = []
for(let i=0; i<myFruit.length; i++){
    myFruit2.push(myFruit[i].toUpperCase())
}
console.log(myFruit2)

myFruit2 = []
console.log(myFruit2)

// use const for creating an array //


const myFruit3 = ['apple','mango','grapes','banana']
myFruit3.push('orange')
console.log(myFruit3)

// myFruit3 = ['jamfal']     // we can't chagne the const array and 90% of world developer use const 
// console.log('myFruit3')



// while loops in array

const fruit2 = ['apple','mango','grapes','banana']

let j = 0 
while(i<fruit2.length){
    console.log(fruit2[i].toLowerCase())
    j++
}


// for of loop in array

const fruit3 = ['apple','mango','grapes','banana']
for(let fruit of fruits){
    console.log(fruit.toUpperCase())
}
// console.log(fruit)


// for in loop arrays


const fruit4 = ['apple','mango','grapes','banana']
for(let index in fruit4){
    console.log(fruit4[index])
}

// array destructuring

const myArray = ['value1','value2','value3','value4'];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// let myvar3 = myArray[2];
// console.log('value of myvar1',myvar1)
// console.log('value of myvar2',myvar2)
// console.log('value of myvar3',myvar3)

let[myvar1,myvar2, ...myNewArray] = myArray;
console.log('value of myvar1',myvar1)
console.log('value of myvar2',myvar2)
// console.log('value of myvar3',myvar3)
console.log(myNewArray)
console.log(myNewArray.length)
console.log(typeof myNewArray)
console.log(Array.isArray(myNewArray))


// important array methods

// forEach
// map
// filter
// reduce


function multyBy2(numbers){
    for(index in numbers){
        console.log(index,numbers[index]*2)
    }
}

multyBy2([4,2,5,8])


// forEach method , forEach(callback function)
numbers = [1,2,3,4,5]

numbers.forEach(number => {
    console.log(number**2)
});

// map method  , map(callback function) map always create a new array
const nums = [3,4,6,10,8]

const numSquare = function(number){
    return number * number;
}
const squareNumber = nums.map(numSquare)
console.log(squareNumber)


// with arrow function 

const squareNumber1 = nums.map((num,index) => {return `index: ${index}, ${num*num}`})
console.log(squareNumber1)


const users = [
    {firstName: "harshit", age:23},
    {firstName: "mohit", age:21},
    {firstName: "nitish", age:22},
    {firstName: "meet", age:20},
]

const userNames = users.map((user)=>{
    return user.firstName;
})

console.log(userNames)


// filter method  // filter(callback function)

a = [10,20,30,40,59,60]
const sqare = a.filter((a) => {
    return a%2 !== 0;
})
console.log(sqare)


// reduce method  // reduce(callback function)

const values = [1,2,3,4,5,6,7,8,9,10]
const sum = values.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue
  
 })

 console.log(sum)

 // behind the scene
 // accumulator  +   currentValue,    return 
 // 1            +       2             3
 // 3            +       3             6
 // 6            +       4             10
 // 10           +       5             15
 // 15           +       6             21
 // 21           +       7             28
 // 28           +       8             36
 // 36           +       9             45
 // 45           +       10            55



 const userCart = [
    {productId:1, productName: 'mobile', price: 12000},
    {productId:2, productName: 'tv', price: 30000},
    {productId:3, productName: 'fridge', price: 18000},
 ]

 const totalAmout = userCart.reduce((totalPrice,currentProduct) => {
    return totalPrice + currentProduct.price
 },0)


 // totalPrice      +        currentProduct                                 =   return
 // 0               +            {} => currentProduct.price=12000               12000
 //12000            +            {} => 30000                                    42000
 //42000            +            {} => 18000                                    60000  

 console.log(totalAmout)

// const myString = 'Hello world'

// console.log(myString.slice(1,4))

const myArrr = ['hello','hii','kem cho','su chale','saru chene']   // arrays are mutable we can add,change,remove the value of array
myArrr.pop()
console.log(myArrr)


 // sort method //

const sortNum = [4,1,5,10,8,50,25,12,85,55]
sortNum.sort((a,b)=>a-b);         // sort by ascending order
console.log(sortNum)

// 1200,410
// a-b ----> 790
// a-b ----> positive (>0) b,a
// 410, 1200

// a-b ----> negative ----> a,b
// 5, 9 ----> -4
 
 const sortNum2 = [4,1,5,10,8,50,25,12,85,55]
 sortNum2.sort((a,b)=>b-a);         // sort by descending order
 console.log(sortNum2)


 const products = [
    {productId:1, productName:"mobile", price:30000},
    {productId:2, productName:"tv", price:20000},
    {productId:3, productName:"laptop", price:40000},
    {productId:4, productName:"fridge", price:18000},
    {productId:5, productName:"smart watch", price:2000},
 ]

// const lowToHigh = products.sort((a,b)=>{
//     return a.price - b.price
// })
// console.log(products)
// console.log(lowToHigh)

const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price
})
console.log(products)
console.log(lowToHigh)


// find method

const myFindArray = ['Hello','cat','dog','lion'];

const ans = myFindArray.find((string)=>string.length===3)
console.log(ans);

const usersInfo = [
    {userId : 1 , userName : 'Harshit'},
    {userId : 2 , userName : 'Meet'},
    {userId : 3 , userName : 'jay'},
    {userId : 4 , userName : 'Dixit'},
    {userId : 5 , userName : 'prakash'},

]

const myUser = usersInfo.find((user)=>user.userId===3);
console.log(myUser)



//  every method 

const everyEven = [2,4,6,8,10];
const isEven = everyEven.every((number)=>number%2===0);
console.log(isEven)

// callback function  ----->   true / false (boolean)
// every method       ----->   true / false (boolean)

const cartItems = [
    {productId:1, productName:"mobile", price:30000},
    {productId:2, productName:"tv", price:20000},
    {productId:3, productName:"laptop", price:40000},
    {productId:4, productName:"fridge", price:18000},
    {productId:5, productName:"smart watch", price:2000},
 ]

 const allCheck = cartItems.every((cartItem) => cartItem.price < 50000)
 console.log(allCheck);



 // some method  // 

 const someNumbers = [3,5,8,9];

 //  kya ek bhi number esa hai jo even hai
 // true

 const someNumber = someNumbers.some((number) => number%2===0);
 console.log(someNumber)

// In Realistic world example
 const someCartItems = [
    {productId:1, productName:"mobile", price:30000},
    {productId:2, productName:"tv", price:20000},
    {productId:3, productName:"laptop", price:40000},
    {productId:4, productName:"fridge", price:18000},
    {productId:5, productName:"smart watch", price:2000},
    {productId:6, productName:"macbook", price:120000},
 ]

const someCartItem = someCartItems.some((item) => item.price > 100000)
console.log(someCartItem)


// fill method 
// value , start , end

const myArrayFill = new Array(10).fill(0);
console.log(myArrayFill)

const myFillArr = [1,2,3,45,6,7,8,9]
myFillArr.fill(0,2,5)
console.log(myFillArr)


// splice method

// start , delete, insert

const mySpliceArray = ['item1','item2','item3']
mySpliceArray[0] = 'newItems'                       // arrays are mutable
console.log(mySpliceArray)

//delete
const deletedItem = mySpliceArray.splice(1,1);
console.log(deletedItem)
console.log(mySpliceArray)

//insert
mySpliceArray.splice(1,0,'insert item4','insert item5')
console.log(mySpliceArray)


// using both insert and delete 
const deletedItems = mySpliceArray.splice(1,2,'inserted item1','inserted item2')
console.log(deletedItems)
console.log(mySpliceArray)




// iterables
// jispe hum for loop laga sakein
// string, array are iterable
// object are not iterable

// const stringIterable = "Meet Donga"
// for(let char of stringIterable){
//     console.log(char)
// }

// const items = ['item1','item2','item3'];
// for(let item of items){
//     console.log(item);
// }

// array like object
// jinke pas length property hoti hai
// aur jisko hum index se access kar sakte hai
// example : 'string'

const arrayLike = 'harshit'
console.log(arrayLike.length)
console.log(arrayLike[0]);


const sliceArray = ['fruits','vegetables','dryfood','mango','oranges'] 
const sliceArr = sliceArray.slice(0,3)
console.log(sliceArr)
console.log(sliceArray)




