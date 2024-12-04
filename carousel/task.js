let imgarray = ["https://t3.ftcdn.net/jpg/01/67/72/04/360_F_167720496_af8JnHFQM7QMyIIz31tgp289ukGtlXKB.jpg","https://cdn.pixabay.com/photo/2017/11/12/13/37https/forest-2942477_1280.jpg","https://static.vecteezy.com/system/resources/thumbnails/040/213/284/small_2x/ai-generated-natural-archway-of-sunlit-trees-in-the-forest-created-with-generative-ai-photo.jpg"]
let photo1 = document.getElementById('photo1')
let button1 = document.getElementById('next')
let button2 = document.getElementById('prev')

let flag = 0
button1.addEventListener("click", ()=>{

for(let i=0;i<imgarray.length;i++){
  if(flag==i){
   photo1.style.backgroundImage ="url("+imgarray[i]+")"
    console.log(imgarray[i])
   
  }
 
    

}
flag+=1
if(flag>=imgarray.length){
    flag=0
}


console.log("nezt" +flag)

})

button2.addEventListener('click',()=>{
   
for(let i= 0; i<imgarray.length;i++){
    console.log(flag)
    if(flag==i){
        
         photo1.style.backgroundImage ="url("+  imgarray[i - 2]+")"
    }
    
}
flag-=2
if(flag<-2){
    flag=imgarray.length - 1;
    
}

console.log("pre" +flag)

})

