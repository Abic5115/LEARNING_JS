let button1 = document.getElementById("button1")

let flag = "white"
 flag =   localStorage.getItem('colornow')
 document.body.style.backgroundColor = flag;
function changemode(){
console.log(flag)
 
if(flag=="white"){
document.body.style.backgroundColor = "black"    
flag ="black"

   }
else{
    document.body.style.backgroundColor = "white"
    flag="white"
  
}
console.log(flag)
localStorage.setItem('colornow', flag); 
}


