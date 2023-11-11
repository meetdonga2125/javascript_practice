// function (that function create object)
// add key value pair
// object ko return karega

// function createUser(firstName,lastName,email,age,address){
//     const user = {}
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old`
//     };
//     user.is18 = function(){
//         return this.age >= 18;
//     }
//     return user;
// }

// const user1 = new createUser('meet','donga','meet@gmail.com','24','adalaj')
// console.log(user1)

// const is18 = user1.is18()
// console.log(is18)

const obj1 = {
    key1: "value1",
    key2: "value2",
}

const obj2 = Object.create(obj1); // {}
// there is one more way to create empty object

obj2.key3 = "value3";
// obj2.key1 = 'unique'
console.log(obj2.key1)
// obj2 access the key,value of obj1
console.log(obj2)


// __proto__

// official ecmascript documentation

// [[prototype]]

// __proto__, [[prototype]]  both are same

// prototype


console.log(obj2.__proto__);

// Object.create(obj1) create a __proto__



// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing : function(){
//         return 'toon na nan na '
//     }
// }

// function createUser(firstName,lastName,email,age,address){
//     const user = Object.create(userMethods); //{}
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// const user3 = createUser('meet','donga','meet@gmail.com','24','adalaj')
// console.log(user3.about())


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


function createUser(firstName,lastName,email,age,address){
    const user = Object.create(createUser.prototype); //{}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`
};
createUser.prototype.is18 = function(){
    return this.age >= 18
}
createUser.prototype.sing = function(){
    return "la la la la"
}

const user4 = createUser('Meet','Donga','meet@gmail.com', '24', 'Gandhinagar')
console.log(user4)

console.log(user4.about())

// new keyword


function creatMyInfo(firstName, age){
    this.firstName = firstName;
    this.age = age;
}

creatMyInfo.prototype.about = function(){
    console.log(this.firstName,this.age)
}

const info1  = new creatMyInfo('harshit',6)

// new keyword create object = {}
// 1.)  empty object this = {}
// 2.)  return this
// 3.) automatic link __proto__ same like in above example Object.create() reference to prototype when info1 doesn't find the properties
// from their object it will check in prototype object and execute that property

console.log(info1)
console.log(info1.firstName)
info1.about()

// constructor function ---> name => name always start with capital latter
function CreateUser(firstName,lastName,email,age,address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`
};
CreateUser.prototype.is18 = function(){
    return this.age >= 18
}
CreateUser.prototype.sing = function(){
    return "la la la la"
}

const user5 =  new CreateUser('harshit','vashishth','harshit@gmail.com',25,'Gandhinagar')

console.log(user5)
console.log(user5.about())
console.log(CreateUser.prototype)

for(let key in user5){
    // console.log(key)
    if(user5.hasOwnProperty(key)){
        console.log(key)
    }
}


let numbers = [1,2,3];
console.log(Object.getPrototypeOf(numbers))
let number1 = new Array([1,2,3,4])
console.log(number1)
console.log(Array.prototype)


// change prototype object to array

function myFunc(){
    console.log('hello')
}
myFunc.firstName = "Meet"
console.log(myFunc.prototype)
myFunc.prototype = []
console.log(myFunc.prototype)
myFunc.prototype.push('1');
console.log(myFunc.prototype)



class Animal {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

const animal1 = new Animal('tom',2)
console.log(animal1);
console.log(animal1.eat());

const animal2 = new Animal('harry',3)


// Dog class inherits all properties and methods of Animal class
// Dog class ---> subclass, derived class
// Animal class ---> baseclass, parent class

class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age)
        this.speed = speed;
    }

    eat(){
        return `Modified Eat: ${this.name} is eating`
    }

    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }

}

const dog1 = new Dog('tommy','4',45)
console.log(dog1)
console.log(dog1.run());
console.log(dog1.eat());  // first check that eat method is inside its class when it find inside it it will execute that method


// getter and setters


class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

       // static method

    static classInfo(){
        return 'this is a person class'
    }

    static desc = 'static property'

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName){
        const[firstName,lastName] = fullName.split(" ")
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person('harshit', 'sharma', 5)
// console.log(person1.fullName())
// fullName method access by using parenthesis
// if we want to use it without parenthesis we can use get keyword
// with using get we can access method as property

console.log(person1.fullName)  // method access same like property

person1.fullName = 'mohit sharma';
console.log(person1)
console.log(person1.firstName)


let myStringArr = ['Meet','Kishan','Naimish']
console.log(myStringArr.join("-->"))
let[name1,name2,name3] = myStringArr
console.log(name1)


// static methods and properties

const personInfo = Person.classInfo()
console.log(personInfo)
const personInfo1 = Person.desc
console.log(personInfo1)







