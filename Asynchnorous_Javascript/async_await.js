// const URL = "https://jsonplaceholder.typicode.com/posts"

// const whatIsFetch = fetch(URL)

// console.log(whatIsFetch)   // return promise

// fetch(URL)
//       .then(Response => {
//         if(Response.ok){
//             console.log(Response)
//             return Response.json()
//         }else{
//             throw new Error("Something went wrong !!!!")
//         }
        
//       })
//       .then(data => {
//         console.log(data)
//       })


// async await

const URL = "https://jsonplaceholder.typicode.com/posts"

async function getPosts(){
    const response = await fetch(URL);        // await keyword wait for response is resolve or reject
    if(!response.ok){
        throw new Error('Something went wrong')
    }
    const data = await response.json()        
    // console.log(data)
    return data;                         // return keyword return promise not a response
}

getPosts()
        .then((myData)=> {
            console.log(myData)
        })
        .catch((error) => {
            console.log("inside catch")
            console.log(error)
        })


//  const a = 10;
//  if(a === 10){
//     console.log('true')
//  }       

//  if(a != 11){
//     console.log('true')
//  }else{
//     console.log('false')
//  }

//  if(typeof a === 'number'){
//     console.log('true')
//  }


// const arr = ['apple','dragon','grapes','kiwi']

// if(arr.includes('apple')){
//     console.log('true')
// }

// const str = 'My name is meet'
// console.log(str.slice(2))
// console.log(str.slice(-4))