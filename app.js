const buttons=document.querySelectorAll(".button");
const count=document.querySelector(".count");
let value=0;

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        button.innerHTML=="+" ? value++ : value-- 
        count.innerHTML=value
      })

})

