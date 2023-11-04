// closures


// function can return functions
// inner function can access the outer function variable property


function outerFunction(){
    function innerFunction(){
        console.log('hello world')
    }
    return innerFunction;
}

const ans = outerFunction();
ans()


// 2)

function hello(x){
    const a = 'varA';
    const b = 'varB';
    return function(){
        console.log(a,b,x);
    }
}

const answer = hello("arg");
answer();

// 3)

function myFunction(power){
    return function(number){
        return number ** power
    }
}


const square = myFunction(2)
console.log(square(5))


function func(){
    let counter = 0;
    return function(){
        if(counter<1){
            console.log("hi you called me")
            counter++;
        }else{
            console.log('Mai already ek bar call ho chuka hu')
        }
    }
}

const myFunc = func();
myFunc();
myFunc();


