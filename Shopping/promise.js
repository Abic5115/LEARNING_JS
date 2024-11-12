var box = document.getElementById("box1");
var main1 = document.getElementById("main")

var fetchdata = ()=>{
    fetch("details.json")
    .then(response=>{
        if(!response.ok){
            throw new Error("response was not correct")

        }
        return response.json()
    })
    .then(data =>{
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
            let info5 = document.createElement("p");
            let info6 = document.createElement("p");
            let info7 = document.createElement("p");
      
            info1.innerHTML = "title:" + data[i].title;
              info2.innerHTML = "price:"+ data[i].price;
              info3.innerHTML = "description:" + data[i].description;
              info4.innerHTML = "category:"+ data[i].category;
              info5.innerHTML =  data[i].image;
              info6.innerHTML = "rating:"+ data[i].rating.rate;
              info7.innerHTML = "rating count:"+ data[i].rating.count;
              
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
    
)

    }
    fetchdata()