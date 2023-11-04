const mainButton = document.querySelector("button");
const body = document.body
// console.log(Math.floor(Math.random() * 255))

function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red},${green},${blue})`
    return randomColor;
}

console.log(randomColorGenerator())

mainButton.addEventListener('click',()=>{
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor
    const span = document.querySelector('span')
    span.innerText = randomColor
    // h1.textContent = `Current color : ${h1}`;
    
})