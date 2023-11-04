// DOM
// document object model
// overview


// console.log(window.document)
// console.dir(document)

// console.log(typeof document)  ans. object

// select element using get element by Id

// console.log(typeof document.getElementById("main-heading"));  ans. object

// const mainHeading = document.getElementById('main-heading');
// console.log(mainHeading)

// select element using query selector

// const mainHeading = document.querySelector('#main-heading')
// const navItem = document.querySelectorAll('.nav-item')
// console.log(mainHeading)
// console.log(navItem)


// change text
// textContent and innerText

// const mainHeading = document.getElementById('main-heading')
// console.log(mainHeading.innerText)     // it will not displayed the hide content
// console.log(mainHeading.textContent)  // it will displayed the hide content also  
// mainHeading.textContent = "This is something else"

// change style of element

// const mainHeading = document.querySelector("div.headline h2")
// console.log(mainHeading.style)
// mainHeading.style.backgroundColor = 'blue'
// mainHeading.style.border = '20px solid green'

// get and set attribute

// const link = document.querySelector('a');
// console.log(link.getAttribute("href").slice(1));

// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));

// link.setAttribute("href","https://google.com");
// console.log(link.getAttribute('href'))


// get multiple elements using getElement by class Name
// get multiple elements items using querySelectorAll

// const navItems = document.getElementsByClassName("nav-item")  // HTMLCollection
// array like object ---> indexing, length property, iteration(loop)

// const navItems = document.querySelectorAll('.nav-items') // NodeList
// let anchorTags = document.getElementsByTagName('a')
// console.log(navItems[0]);
// console.log(navItems[1])
// console.log(typeof navItems)
// console.log(Array.isArray(navItems))
// console.log(navItems.length)

// simple for loop
// for(let i=0; i<anchorTags.length; i++){
//     console.log(anchorTags[i])
//     const anchorTag = anchorTags[i];
//     anchorTag.style.backgroundColor = '#fff';
//     anchorTag.style.color = 'green';
//     anchorTag.style.fontWeight = 'bold'
// }

//for of loop // 
// for(anchorTag of anchorTags){
//     anchorTag.style.backgroundColor = '#fff';
//     anchorTag.style.color = 'green';
//     anchorTag.style.fontWeight = 'bold'
// }

// forEach we can't use forEach method to iterate through HTMLCollection


// anchorTags = Array.from(anchorTags)          // convert HTMLCollection to Array
// console.log(Array.isArray(anchorTags))

// anchorTags.forEach((anchorTag) => {
//        anchorTag.style.backgroundColor = '#fff';
//        anchorTag.style.color = 'green';
//        anchorTag.style.fontWeight = 'bold';
// })


// const divTag = document.getElementsByTagName('div')
// console.log(divTag)

// const navItems = document.querySelectorAll('.nav-items') // NodeList

//we can use in NOdelist
// simple for loop
// for of loop
// forEach method

// const formElement = document.getElementsByClassName('signup-form')
// console.log(formElement)


// innerHtML
// const headLine = document.querySelector(".headline")
// headLine.innerHTML = "<h1>Inner html changes </h1>"
// headLine.innerHTML = "<button class=\"btn\" >Learn More </button>"

// console.log(headLine.innerHTML)

// document.getElementById("myForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the form from actually submitting
//     alert("Form submitted!");
// });

// const sectionTodo = document.querySelector(".todo-section");
// console.log(sectionTodo.classList);
// sectionTodo.classList.add('bg-dark');
// sectionTodo.classList.remove("container")
// const ans = sectionTodo.classList.contains("container")
// console.log(ans)
// sectionTodo.classList.toggle('bg-dark');
// sectionTodo.classList.toggle('container');



// Add new HTML elements to page


// innerHTML to add html element

// const todoList = document.querySelector(".todo-list")
// console.log(todoList.innerHTML);
// todoList.innerHTML = "<li> New Todo </li>"  // this is not right approach
// todoList.innerHTML += "<li>New Todo</li>";
// todoList.innerHTML += "<li>teach students</li>";


// let fname = 'Meet'
// fname += " Donga"
// console.log(fname)



// when you should use it, when you should not 

// document.createElement()
// append
// prepend
// remove

// before
// after

// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach students");
// newTodoItem.textContent = "Teach students"
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem)
// todoList.after(newTodoItem)
// todoList.append(newTodoItem)
// todoList.prepend(newTodoItem)

// console.log(todoList)

// elem.insertAdjacentHTML(where,html)
// beforebegin,
// afterbegin,  // same like prepend
// beforeend;  // same like append
// afterend;

// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentElement("beforeend","<li>New li</li>");


// clone nodes

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = 'new todo';
// const li2 = li.cloneNode(true)
// ul.append(li)
// ul.prepend(li2)


// some old methods to support poor IE

// appendChild;
// removeChild;
// insertBefore;
// replaceChild;

// new element

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = 'new todo';
// const referenceNode = document.querySelector(".first-todo")
// ul.insertBefore(li,referenceNode)  // insertBefore
// ul.replaceChild(li,referenceNode)  // replaceChild
// ul.removeChild(referenceNode)      // removeChild



// static list vs live list

// querySelectorAll hamein static list degi
// getElementBY,Something(Id,Class,tagName) hamein live list degi
// const listItems = document.querySelectorAll(".todo-list li");
// const sixthLi = document.createElement("li")
// sixthLi.textContent = 'Item6';
// const ul = document.querySelector('.todo-list');
// ul.append(sixthLi)
// console.log(listItems)


// how to get the dimension of element
// height width

// const sectionTodo = document.querySelector(".todo-section")
// const info = sectionTodo.getBoundingClientRect().height;
// const info = sectionTodo.getBoundingClientRect().width;
// const info = sectionTodo.getBoundingClientRect();
// console.log(info)



// intro to events
// click, button press, mouseover, mousedown
// event addkarne ke 3 tarike hai

// 1) in html you add onclick() event 
// 2) in js file you select button id 

const btn = document.querySelector('.btn-headline');
// console.log(btn);
// console.dir(btn);
// console.log(typeof btn)

// 2)  btn.onclick = function(){
//     console.log('You clicked me!!!!!!!')
// }


// 3) method ---- addEventListener
// function clickedMe(){
//     console.log('you clicked me!!!!')
// }

// in case of arrow function value of this is window object
// btn.addEventListener('click',(e) => {
//     console.log(e);
//     console.log(e.target)
//     console.log('you clicked me!!!!')
//     console.log(this)

// })

// in case of normal function value of this is element on which event received
// btn.addEventListener('click',function(){
//     console.log("you clicked me !!!")
//     console.log("value of this")
//     console.log(this)
// })


















