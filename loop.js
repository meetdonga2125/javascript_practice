// while loop
// dry ---> don't repeat yourself

//without loop

let j = 0
console.log(j)
j++
console.log(j)
j++
console.log(j)
j++
console.log(j)
j++
console.log(j)
j++
console.log(j)
j++
console.log(j)
j++
console.log(j)
j++
console.log(j)
j++
console.log(j)
j++
console.log(j)
j--
console.log(j)



// with looping with don't repeat the code again and again 


let i = 0

while(i<10){
    console.log(i)
    i++
}
console.log(i)


//sum of first 10 numbers
let sum = 0
let num = 0
while(num<=10){
    sum = sum + num
    // console.log(sum)
    num++
}
console.log(sum)

// another way by formula
num = 10
let total = (num*(num+1))/2
console.log(total)


// intro to for loop
// print 0 to 9

let sumF = 0
for(let i=0; i<=10; i++){
    sumF = sumF + i;
}
console.log(sumF);
console.log("value of i is ",i)

// break keyword
// continue word

for(let i=1; i<=10; i++){
    if(i==4){
        break                    // break keyword jumps execution outside for loop
    }
    console.log(i);
}
console.log('hello there')


let k = 0

while(true){
    console.log(k)
    k++
    break
}


// do while loop //
let m = 10;

do{
    console.log(m);
    m++;
}while(i<=9);

console.log('value of i is ',m)


function shufflePassword(array){
    for (let i = array.length - 1; i>0; i--){
        console.log(array[i])
        const j = Math.floor(Math.random() * (i+1))
        const temp  = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = ''
    array.forEach((el) => {
        str += el
    })
    return str
}


// console.log(shufflePassword([1,2,3,4,5,6]))


nation = ['ind','aus','nz','eng','ban','sr']

for(let i = nation.length - 1; i>=0; i--){
    const j = Math.floor(Math.random() * (i+1))
    // console.log(nation[value])
    const temp = nation[i]
    nation[i] = nation[j]
    nation[j] = temp
    console.log(nation[j])
}


// console.log(Math.floor(Math.random() * 5))

// let str = ' '
// nation.forEach((ele) => {
//     str += ele
// })
// console.log(str)







