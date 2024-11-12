let num1 = document.getElementById("num1")
console.log(num1)
let boxx = document.getElementById("box1")
let multi = 0;
function multiply1(){
    let number1 = num1.value
    boxx.innerHTML = ""
for(let i =1 ;i<=10;i++){
multi = number1* i
console.log(multi)
let paragraph1 = document.createElement('p')
paragraph1.innerHTML = number1  + "*" +  i + "=" +  multi
boxx.appendChild(paragraph1)
}
}