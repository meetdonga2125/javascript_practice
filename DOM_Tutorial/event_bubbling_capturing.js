//event bubbling / event propogation
// event capturing
// event delegation

const grandparent = document.querySelector('.grandparent')
// const parent = document.querySelector('.parent')
// const child = document.querySelector('.child')

// event bubbling

// child.addEventListener("click", () => {
//     console.log("you clicked on child")
// })

// parent.addEventListener('click',() => {
//     console.log('you click on parent')
// })

// grandparent.addEventListener('click',() => {
//     console.log('you click on grandparent')
// })

// document.body.addEventListener('click',() => {
//     console.log('you clicked on body')
// })


// capturing events


// child.addEventListener("click", () => {
//     console.log("capture !!! on child")
// },true)

// parent.addEventListener('click',() => {
//     console.log('capture !!! on parent')
// },true)

// grandparent.addEventListener('click',() => {
//     console.log('capture !!! on grandparent')
// },true)

// document.body.addEventListener('click',() => {
//     console.log('capture !!! on body')
// },true)


// event delegation



grandparent.addEventListener('click',(e) => {   
    // console.log('you click on grandparent')
    console.log(e.target)
    // e.target.style.backgroundColor = 'red';
})



