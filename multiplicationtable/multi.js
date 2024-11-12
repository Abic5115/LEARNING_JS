let number1 = prompt("enter the number whose multiplication table")
let boxx = document.getElementById("box1")
let multi = 0;
for(let i =1 ;i<=10;i++){
multi = number1* i
console.log(multi)
let paragraph1 = document.createElement('p')
paragraph1.innerHTML = number1  + "*" +  i + "=" +  multi
boxx.appendChild(paragraph1)
}