// BASIC THEORY

// AJAX : asynchronous javascript and XML

// is a set of 'web development techniques'
// using many web technologies on the 'client-side'
// to create asynchronous web applications.

// With Ajax, web applications can send and retrive
// data from a server asynchronously (in the background)
// without interfering with the display and
// behaviour of the existing page

// We don't use data in XML format anymore.
// we use JSON now.

// we have 3 most common ways to create and send request to server
// 1.) xmlHTTPRequest (old way of doing)
// 2.) fetch API (new way of doing)
// 3.) axios (this is third party library)

// const URL = "https://jsonplaceholder.typicode.com/posts"
// const xhr = new XMLHttpRequest();
// console.log(xhr);
// step1
// xhr.open('GET',URL);
// console.log(xhr.response)
// console.log(xhr.readyState)


// if(xhr.readyState === 4){
//     console.log(xhr.response)
//     const response = xhr.response
//     const data = JSON.pardse(response)
//     console.log(typeof data)
//     console.log(data)
// }
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState)
//     if(xhr.readyState === 4){
//         console.log(xhr.response)
//         const response = xhr.response
//         const data = JSON.parse(response)
//         console.log(typeof data)
//     }
    
// }

// xhr.onload = () => {
//     console.log(xhr.readyState)
//     console.log(xhr.response)
// }
// xhr.send()


const URL = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest();

xhr.open('GET',URL),
xhr.onload = () => {
    if(xhr.status >= 200 && xhr.status < 300){
        const data = JSON.parse(xhr.response)
        // console.log(data)
        const id = data[3].id
        console.log(id)
    }else{
        console.log('something went wrong')
    }
    
}

xhr.onerror = () => {
    console.log('netwrok error')
}

xhr.send();



