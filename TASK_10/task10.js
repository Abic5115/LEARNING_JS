


document.getElementById("b1").textContent="Click to change to darkmode"

function darkmode(){
    
    if(getComputedStyle(document.body).backgroundColor==="rgb(255, 255, 255)"){
    document.body.style.backgroundColor="black"
}
else{
    document.body.style.backgroundColor="rgb(255, 255, 255)"
   
}
}