
const allButtons  = document.querySelectorAll('button');

// for(let button of allButtons){
//     button.addEventListener('click',function(){
//         console.log(this.textContent)
//     })
// }

// for(let i = 0; i< allButtons.length; i++){
//     allButtons[i].addEventListener('click',function(){
//         console.log(this);
//     })
// }


// allButtons.forEach(function(button){
//     button.addEventListener('click',function(){
//         console.log(this.textContent)
//     })
// })


// event object 


// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click",function(){
//     console.log('you clicked me')
// })

// jab bhi mai kisi bhi element pe event listener add hoga
// js Engine ---- line by line execute karta hai
// browser ---- js Engine +  extra features
// browser ---- js Engine + WebApi

// jab browser ko pata chala ki user ne event perform kia
// jo hum listen kar rahe hai
// browser ---- 2 task taken
// 1.) callback function hai vo js Engine ko degi
// 2.) callback function ke sath vo event hua hai uski information bhi dega
// ye info ak object ke form mai milegi(event object as e)

console.log('script start !!!!!')

for(let button of allButtons){
    button.addEventListener('click',(e) => {
        // console.log(e.target)
        console.log(e.currentTarget)
        console.log(e)
        e.target.style.backgroundColor = 'yellow'
    })
}

console.log('script end !!!!!!')











