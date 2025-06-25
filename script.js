let btn = document.querySelector('.send-btn')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let raqam = document.querySelector('.counter-value')
let input = document.querySelector(".number-input")
let rang = document.querySelector(".rang")

let son = 0



btn.addEventListener("click", ()=>{
  raqam.innerHTML = input.value
  son = input.value
})

plus.addEventListener("click", ()=>{

  son++
  console.log(son);
  raqam.innerHTML = son
  
})

minus.addEventListener("click", ()=>{
  // console.log(son);

  son--
  raqam.innerHTML = son
  
})

rang.addEventListener("input", (e)=>{
  // raqam.style.color = e.target.value
  console.log(e);
})