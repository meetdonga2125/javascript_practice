// const arr = ['apple','banana','grapes']
// const myPromise = new Promise((resolve,reject) => {
//     if(arr.includes('apple')){
//         resolve('resolve')
//     }
//     else{
//         reject(value)
//     }

// })

// myPromise.then((value) => console.log(value))



// function myPromise2(num1, num2) {
//     return new Promise((resolve, reject) => {
//       if (typeof num1 === 'number' && typeof num2 === 'number') {
//         console.log(num1 + num2);
//         resolve();
//       } else {
//         reject("Both arguments must be numbers");
//       }
//     });
//   }
  
//   myPromise2(4, 5)
//     .then(() => {
//       console.log("Promise resolved");
//     })
//     .then(()=> { myPromise(45,78)})
//     .catch((error) => {
//       console.error("Promise rejected: " + error);
//     });


// const myFunc = function(){
//     console.log('hello world')
// }

// myFunc()


function myFunc(num1,num2,callback){
    console.log(num1,num2)
    callback(num1,num2)
}

myFunc(4,5,(num1,num2) => {
    console.log(num1+num2)
})


// Sample array of user objects
const usersInformation = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 16 },
    { name: 'Eve', age: 22 }
  ];
  
  // Empty array to store users of legal age
  const legalAgeUsers = [];
  
  // Loop through each user in the array
  for (let i = 0; i < usersInformation.length; i++) {
    // Check if the user is of legal age
    if (usersInformation[i].age >= 18) {
      // If of legal age, push the user to the legalAgeUsers array
      legalAgeUsers.push(usersInformation[i]);
    }
  }
  
  // Output the result
  console.log("All Users:", usersInformation);
  console.log("Users of Legal Age:", legalAgeUsers);


  const numArray = ['2','4','10','5','9','11','16','17']
  const isEven = []
  const isOdd = []

  for(num of numArray){
    if(num % 2 ===0){
       isEven.push(num)
    }
    else{
        isOdd.push(num)
    }
  }

  console.log(isEven)
  console.log(isOdd)

  const filterArray = numArray.filter((num) => {
    return num>5
  })

  const mapArray = numArray.map((num) => {
    return (num**2)
  })



  console.log(filterArray)
  console.log(mapArray)


 

const wcTeams = ['Ind','Ban','Sri','Aus','Afg','Ire','Eng','New','pak','sa']

// wcString = wcTeams.toString()
wcString = wcTeams.join()
wcArray = wcString.split(',')
// spliceArray = wcTeams.splice(0,2,'zem','indes')
console.log(wcTeams[0])
console.log(wcTeams.includes('Ban'))
console.log(wcTeams[1])
console.log(wcTeams)


// console.log(spliceArray)
console.log(wcTeams)

console.log(wcString)

const stringSplit = 'hello ji kya hall chall'
stringArray = stringSplit.split(' ').join('---->')
console.log(stringArray)


let stringItem = ""
for(let item of wcTeams){
  // let stringItem = ""
  stringItem += item
}
console.log(stringItem)





// let toDoList = [
//     'Complete homework',
//     'Go to the grocery store',
//     'Attend a meeting',
//     'Exercise for 30 minutes',
//   ];
  
//   // Display the current to-do list
//   console.log('Current To-Do List:');
//   for (let i = 0; i < toDoList.length; i++) {
//     console.log(`${i + 1}. ${toDoList[i]}`);
//   }


//   // Add a new task
// let newTask = 'Read a book';
// toDoList.push(newTask);
// console.log('\nTo-Do List after adding a new task:');
// for (let i = 0; i < toDoList.length; i++) {
//   console.log(`${i + 1}. ${toDoList[i]}`);
// }

// // Mark a task as completed (using a boolean flag)
// let completedTaskIndex = 2;
// let completedTask = toDoList[completedTaskIndex];
// toDoList[completedTaskIndex] = `${completedTask} (Completed)`;
// console.log('\nTo-Do List after marking a task as completed:');
// for (let i = 0; i < toDoList.length; i++) {
//   console.log(`${i + 1}. ${toDoList[i]}`);
// }


// // Remove a task
// let removedTaskIndex = 1;
// let removedTask = toDoList.splice(removedTaskIndex, 1)[0];
// console.log('\nTo-Do List after removing a task:');
// for (let i = 0; i < toDoList.length; i++) {
//   console.log(`${i + 1}. ${toDoList[i]}`);
// }
// console.log(`Removed Task: ${removedTask}`);




