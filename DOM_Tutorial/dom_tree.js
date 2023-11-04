// const rootNode = document.getRootNode();
// const htmlElemetNode = rootNode.childNodes[0];
// // console.log(htmlElemetNode.childNodes); NodeList(3) [head,text,body]
// const headElementNode = htmlElemetNode.childNodes[0]
// console.log(headElementNode)
// const textNode1 = htmlElemetNode.childNodes[1];
// console.log(textNode1)
// const bodyElementNode = htmlElemetNode.childNodes[2];
// console.log(bodyElementNode)
// console.log(htmlElemetNode)

// sibling relation

// const h1 = document.getElementsByTagName('h1')
// console.log(h1)
// const body = h1.parentNode;
// console.log(body)
// body.style.color = '#efefef';
// body.style.backgroundColor = '#333';
// body.style.color = '#efefef';
// const body = document.body;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
const head = document.querySelector("head");
console.log(head);
const title = head.querySelector('title');
console.log(title)
const titleParent = title.parentNode
console.log(titleParent)
const titleSibling = title.nextSibling.nextSibling
console.log(titleSibling)
console.log(title.childNodes)
const container = document.querySelector("div");
console.log(container);