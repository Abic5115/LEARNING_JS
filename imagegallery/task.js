let images = [{
name:"firstimage",
image:"https://t3.ftcdn.net/jpg/01/67/72/04/360_F_167720496_af8JnHFQM7QMyIIz31tgp289ukGtlXKB.jpg"

},
{
    name:"secondimage",
    image:"https://cdn.pixabay.com/photo/2017/11/12/13/37/forest-2942477_1280.jpg"
    
    },
    {
        name:"thirdimage",
        image:"https://static.vecteezy.com/system/resources/thumbnails/040/213/284/small_2x/ai-generated-natural-archway-of-sunlit-trees-in-the-forest-created-with-generative-ai-photo.jpg"
        
        }

]

let main = document.getElementById("main")

for(let i=0;i<images.length;i++){
    let paragraph = document.createElement('p')
    paragraph.innerHTML = images[i].name
    main.appendChild(paragraph)
   
paragraph.addEventListener('click',()=>{
    let box = document.createElement('dialog')
    box.style.backgroundImage = "url("+images[i].image+")"
    box.id = "dialog1"
    main.appendChild(box)
    box.showModal()
})    
}





