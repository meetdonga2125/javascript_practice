// objects reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects


const person = {
    name : "Meet",
    age  : 24,
    city : 'Gandhinagar',
    hobbies : ['reading','playing cricket', 'tabel tennis']
}

console.log(typeof person)
console.log(person)

// how to access data from objects
console.log(person.name)             // 1st method to access data -- dot notation
console.log(person['name'])          // 2nd method to access data -- bracket notation
console.log(person.age)
console.log(person['age'])
console.log(person.hobbies[0])

//how to add key value pair to objects
person.gender = 'male'               // 1st method to add key value pair to objects -- dot notation
console.log(person)

person['lastName'] = 'Donga'         // 2nd method to add key value pair to objects -- bracket notation
console.log(person)                  



// ho to iterate object 


const person1 = {
    name : "Meet",
    age  : 24,
    city : 'Gandhinagar',
    hobbies : ['reading','playing cricket', 'tabel tennis']
}

// for in loop
// Object.keys

for(let key in person1){
    // console.log(key)
    console.log(`${key} : ${person1[key]}`)
}

// Object.keys, Object.values gives us an array

console.log(Object.keys(person1))

for(let key of Object.keys(person1)){
    console.log(person1[key])
}


// computed properties  //

const key1 = "objkey1"
const key2 = "objkey2"

const value1 = "myvalue1"
const value2 = "myvalue2"


const obj = {
    [key1] : value1,
    [key2] : value2,
}
console.log(obj)

const obj1 = {}
obj1[key1] = value1;
obj1[key2] = value2;
console.log(obj1)


const obj2 = {}

obj2['key1'] = 'hello'
obj2['key2'] = 'hi'
console.log(obj2)



// spread operator in objects //

const arr1 = ['value1','value2']
const arr2 = ['value3','value4']
const newarr = [...arr1,...arr2,'meet','Donga',45,25,78,['1','2','Harshit']]
console.log(newarr)
const newArray = [..."123456789"]
console.log(newArray)

const newArr = [..."ABC"]
console.log(newArr)

const obj3 ={
    key1: "value1",
    key2: "value2",
}

const obj4 ={
    key3: "value3",
    key4: "value4",
}

const newObject = {...obj3,...obj4,key5: "value5"}
console.log(newObject)


const newObj = {...'abc'}
const newObj2 = {...["value1","value2"]}
const abcd = {..."abcdefghijklmnopqrstuvwxyz"}
console.log(newObj)
console.log(newObj2)
console.log(abcd)



// object destructuring //

const band = {
    bandName : "led zepplin",
    famousSong : 'stairway to heaven',
    year : 1968,
    anotherFamousSong: 'kashmir',
}

let band1 = band['bandName']
let band2 = band['famousSong']
console.log(band1)
console.log(band2)

const { bandName:var1,famousSong:var2, ...restProps} = band
console.log(var1)
console.log(var2) 
console.log(restProps);


// objects inside array
// very usefll in real world applications

const users = [
    {userId: 1, firstName: 'harshit', gender: 'male'},
    {userId: 2, firstName: 'Meet', gender: 'male'},
    {userId: 3, firstName: 'kishan', gender: 'male'},
]

console.log(users);

for(let user of users){
    console.log(user.firstName)
}


// nested destructuring

const [user1,user2,user3] = users;
console.log(user1)

const[{firstName},{userId} , {gender}] = users;
console.log(firstName);
console.log(gender);
console.log(userId)


// clone using Object.assign

const myObj = {
    key1: 'value1',
    key2: 'value2',
}

const myObj2 = myObj
console.log(myObj)
console.log(myObj2)

myObj['key3'] = 'value3'
console.log(myObj)
console.log(myObj2);


// cloning using spread operator and Object.assign

const firstObj = {
    key1: 'value1',
    key2: 'value2',
}

// const secObj = {...firstObj}        // cloning using spread operator

const secObj = Object.assign({},firstObj)   // cloning using Object.assign it's old method

console.log(firstObj)
console.log(secObj)

firstObj.key3 = 'value3'
console.log(firstObj)
console.log(secObj)


// optional chaining 

const myObj1 = {
    firstName:'Meet',
    address : {housenumber:'1234'}

}

console.log(myObj1?.firstName);
console.log(myObj1?.address?.housenumber);








