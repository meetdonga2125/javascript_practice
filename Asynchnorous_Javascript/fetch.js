// fetch
// fetch tabhi reject dega jab network error aayegi

const URL = "https://jsonplaceholder.typicode.com/posts"

const whatIsFetch = fetch(URL)

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


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));