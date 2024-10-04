

function edit(){
    let text =  prompt("enter the editted text")
document.getElementById("head1").innerHTML= text
}

let color =   ['red','green','yellow','pink','orange','violet','brown','lightgreen','purple','lightblue']








function addcolor(){
   
        document.getElementById("head1").style.color=color[ Math.floor((Math.random() * 10))]

    
}