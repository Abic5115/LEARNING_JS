let main = document.getElementById("main");
var fetchdata = ()=>{
fetch("stu.json")
.then((response)=>{
  return response.json()
})
.then((data)=>{
  for (let i = 0; i < data.length; i++) 
    {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = data[i].firstName;
    main.appendChild(paragraph);
    
    }
    let par1 = document.querySelectorAll(' p')
  for(let i=0;i<par1.length;i++){
  par1[i].addEventListener('click',()=>{
    console.log(data[i].major)
    document.body.classList.toggle("mystyle")

  })
  }
  

})
.catch((error)=>{
  console.log("error") 
})
}
  
 

  


fetchdata();
