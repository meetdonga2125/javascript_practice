const inputSlider = document.querySelector("[data-lengthSlider]")
const lengthDisplay = document.querySelector('[data-lengthNumber]')
const passwordDisplay = document.querySelector('[data-passwordDisplay]')
const copyBtn = document.querySelector("[data-copy]")
const copyMsg = document.querySelector("[data-copyMsg]")
const uppercaseCheck = document.querySelector("#uppercase")
const lowercaseCheck = document.querySelector("#lowercase")
const numbersCheck = document.querySelector("#numbers")
const symbolsCheck = document.querySelector("#symbols")
const indicator = document.querySelector("[data-indicator]")
const generateBtn = document.querySelector(".generateBtn")
const allCheckBox = document.querySelectorAll("input[type='checkbox']")


let password = "";
let passwordLength = 10;
let checkCount = 1;

handleSlider()

// set passwordLength
function handleSlider(){
    inputSlider.value = passwordLength
    lengthDisplay.innerText = passwordLength;
}

function setIndicator(color){
    indicator.style.backgroundColor = color
    //shadow
}

function getRndNumber(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}


function getUpperCase(){
    return String.fromCharCode(getRndNumber(97,123))
}

console.log(getUpperCase(97,123))