let actions  = ["stone","paper","scissor"]
let par1 = document.getElementById('par1')

let inputdata1 = document.getElementById('inputdata')
let result1 = document.getElementById("result1")
let result2 =document.getElementById("result2")
let result3 =document.getElementById("result3")
let flag = 0
let flagvalue = 1
let computervalue =1
function buttonpress(item){
    let systemaction  = actions[Math.floor(Math.random()*3)]
    console.log(systemaction)
   inputvalue = item
   par1.innerHTML = "your action :"+ item
   par2.innerHTML = "computers action:"+ systemaction 
   console.log("item is",inputvalue)
if(systemaction == inputvalue){
    result1.innerHTML = "same"
    flag =2
}
else{
    if(inputvalue == "stone"){
       if(systemaction == "paper"){
        result1.innerHTML = "you lose"
        flag=0
       }
       else{
        result1.innerHTML = "you won"
        flag=1
       }
    }
    else if(inputvalue=="paper"){
        if(systemaction == "stone"){
            result1.innerHTML = "you won"
            flag =1
        }
        else{
            result1.innerHTML = "youlose"
            flag =0
        }
    }
    else if(inputvalue == "scissor"){
        if(systemaction =="stone"){
            result1.innerHTML = "you lose"
            flag=0
        }
        else{
            result1.innerHTML ="you won"
            flag=1
        }
    }
}

if(flag == 1){
    
    console.log( "before" + flagvalue)
    result2.innerHTML =  flagvalue
    flagvalue++
}
else if(flag == 0){
result3.innerHTML = computervalue
computervalue++
}
console.log( "after" + flagvalue)
}
