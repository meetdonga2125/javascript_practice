// methods

// function inside object is called methods

const person = {
    firstName : 'harshit',
    age : 8,
    about : function(){
        console.log(`person name is ${this.firstName} and age is ${this.age}`)
    }
}

person.about();

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`)
}

const person1 = {
    firstName : "harsh",
    age: 8,
    about: personInfo
}
const person2 = {
    firstName : "Meet",
    age: 24,
    about: personInfo
}
const person3 = {
    firstName : "ketan",
    age: 20,
    about: personInfo
}

person1.about()
person2.about()
person3.about()
console.log('hello world')

let myArray = ['item1','item2','item3']
console.log(myArray)

// window === this = true
console.log(this)



// call, bind, apply
// call ---> call fun set a this for function
// apply ---> same as call but take argument in array


function about(hobby,favPlayer){
    console.log(`My name is ${this.firstName} and age is ${this.age},hobby,favPlayer`)
}

const user1 = {
    firstName : "Meet",
    age : 8,
    // about : function(hobby,favPlayer){
    //     console.log(`My name is ${this.firstName} and age is ${this.age},hobby,favPlayer`)
    // }

}

const user2 = {
    firstName : "Harshit",
    age : 18,

}

// user1.about.call(user2,'cricekt','sachin Tendunlker')
about.call(user2)
about.call(user1)

// apply

about.apply(user1,['cricket','sachin tendunlker'])
about.apply(user2,['cricket','M.S.Dhoni'])


// bind ---> bind return a function and store function in a variable and
// use whenever we need it

const func = about.bind(user1,"cricket","sachin tendunlker")
func()


// const myFunc = function(){
//     console.log(this)
// }

// myFunc()


// arrow functions

const user3 = {
    firstName : "harshit",
    age: 8,
    // about: () => {
    //     console.log(this.firstName, this.age)
    // }
    about(){
        console.log(this.firstName,this.age);
    }
}

user3.about(user1)
// arrow function doesn't take this as a current object it take window as as this.



