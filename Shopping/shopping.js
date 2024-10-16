var box = document.getElementById("box1");
var main1 = document.getElementById("main")




var fetchdata = async () => {
  const response = await fetch("details.json");
  const data = await response.json();
  
    for ( let i = 0; i < data.length; i++) {
      var paragraph = document.createElement("p");
      paragraph.innerHTML = data[i].title;
      box.appendChild(paragraph);
      console.log(paragraph);
    
    
      
  paragraph.addEventListener('click', ()=> {

   
      let newquery = document.getElementById("showdata");

      if (newquery) {
        newquery.remove();
      }
      let showdata = document.createElement("div");
      showdata.id = "showdata";
      main1.append(showdata);

      let info1 = document.createElement("p");
      let info2 = document.createElement("p");
      let info3 = document.createElement("p");
      let info4 = document.createElement("p");
     let info5 = document.createElement('img');
     info5.id = "img1";

      let info6 = document.createElement("p");
      let info7 = document.createElement("p");

      info1.innerHTML = "title :" + data[i].title;
        info2.innerHTML = "price :"+ data[i].price;
        info3.innerHTML = "description :" + data[i].description;
        info4.innerHTML = "category :"+ data[i].category;
        
        info5.src =  data[i].image;
        info6.innerHTML = "rating :"+ data[i].rating.rate;
        info7.innerHTML = "rating count :"+ data[i].rating.count;
        
        showdata.appendChild(info1);
        showdata.appendChild(info2);
        showdata.appendChild(info3);
        showdata.appendChild(info4);
        showdata.appendChild(info5);
        showdata.appendChild(info6);
        showdata.appendChild(info7);



       
      box.style.display = "none";
    
    

  

     
  

    
  
  })
}

}
fetchdata()

function back(){
  location.reload()
}

