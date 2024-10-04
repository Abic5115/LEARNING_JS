

let show = document.getElementById("textarea")
// let show1 =document.getElementById("area1")
// let show2 =document.getElementById("area2")


function submit() {
    let inputvalue = document.getElementById("text1").value;
    let list = document.createElement('li')
    list.style.listStyleType = 'none';
    var par = document.createElement('p')
     
    show.appendChild(list)
    list.appendChild(par)
    
    par.textContent = inputvalue

    let button2 = document.createElement('button')
    button2.innerHTML = "delete"
    list.appendChild(button2)
    
    button2.addEventListener('click', () => {
        list.remove()
    })


    let button3 = document.createElement('button')
    button3.innerHTML = "edit"
    list.appendChild(button3)
    
    button3.addEventListener('click', () => {
        let editcontent = prompt("edit the content")
        par.innerHTML = editcontent

    })


}





    document.body.addEventListener("keydown", (e) => {

        if (e.code == 'Space') {
            console.log("hello")

            let d = alert("hi Abhinav c")
        }

    })

    document.getElementById("text1").addEventListener("keydown", (e) => {

        if (e.code == 'Enter') {
            submit()
        }

    })



    document.body.addEventListener("keydown",(e)=>{
        if(e.code=== 'KeyQ'){
            let ph = prompt("enter phone number")
            console.log("the added phone number is",ph)
        }
    })









  