let inputdata = document.getElementById("search");
let suggest = document.getElementById("suggestion");
var students = [];

var fetchdata = async () => {
  const response = await fetch("students.json");
  const data = await response.json();
  
  for (let i = 0; i < data.length; i++) {
    var paragraph = document.createElement("p");
    paragraph.innerHTML = data[i].Name;
    suggest.append(paragraph);
    paragraph.style.display = "none";
  }

  inputdata.addEventListener("input", () => {
    
    const searchdata = inputdata.value.toLowerCase();

    var paragraphs = document.querySelectorAll("#suggestion p");
    for (let i = 0; i < data.length; i++) {
      if (paragraphs[i].innerHTML.toLowerCase().includes(searchdata)) {
        console.log(paragraph[i]);
        paragraphs[i].style.display = "block";
      } else {
        paragraphs[i].style.display = "none";
      }
      if (searchdata == "") {
        paragraphs[i].style.display = "none";
      }

      paragraphs[i].addEventListener("click", () => {
        let showdata = document.createElement("div");
        let main = document.getElementById("main");
        showdata.id = "showdata";
        let newquery = document.getElementById("showdata");
       
        main.append(showdata);
        if (newquery) {
          showdata.remove();
        }

        let info1 = document.createElement("p");
        let info2 = document.createElement("p");
        let info3 = document.createElement("p");
        let info4 = document.createElement("p");
        let info5 = document.createElement("p");
        let info6 = document.createElement("p");
        let info7 = document.createElement("p");
        let info8 = document.createElement("p");
        let info9 = document.createElement("p");
        let info10 = document.createElement("p");
        let info11 = document.createElement("p");
        let info12 = document.createElement("p");

        info1.innerHTML = "Name :" + data[i].Name;
        info2.innerHTML = "Email:" + data[i].Email;
        info3.innerHTML = "Phone number" + data[i].Phone_number;
        info4.innerHTML = "Address :Housenumber :" + data[i].Address.House_number;
        info5.innerHTML = "street name:" + data[i].Address.Street_name;
        info6.innerHTML = "Pin number:" + data[i].Address.Pin_number;
        info7.innerHTML = "country:" + data[i].Address.Country;
        
        info8.innerHTML = "Subjects: " + data[i].Subjects.map(subject => `${subject.Subject_name} (Marks: ${subject.Total_marks})`).join(", ");
        info9.innerHTML = "Applied_for_Scholarship:" + data[i].Applied_for_Scholarship;
        
        // var info2 = document.createElement("p").innerHTML = data.Email;
        // var info3 = document.createElement("p").innerHTML =data.Phone_number;
        // var info4 = document.createElement('p').innerHTML = data.Address
        // var info5 = document.createElement('p').innerHTML = data.Subjects
        // var info6 = document.createElement('p').innerHTML = data.Applied_for_Scholarship

        showdata.appendChild(info1);
        showdata.appendChild(info2);
        showdata.appendChild(info3);
        showdata.appendChild(info4);
        showdata.appendChild(info5);
        showdata.appendChild(info6);
        showdata.appendChild(info7);
        showdata.appendChild(info8);
        showdata.appendChild(info9);
       
        for(i=0;i<paragraphs.length;i++){
        paragraphs[i].style.display = "none";
    }
        // showdata.append(info3);
      });
    }
  });
};
fetchdata();

function goback(){
    location.reload()
}

////////

////
//  if()

//

//  info1.innerHTML = data.Name
//  info2.innerHTML = data.Email
//  info3.innerHTML = data.Phone_number
//  info4.innerHTML = data.Address
//  info5.innerHTML = data.Subjects
//  info6.innerHTML = data.Applied_for_Scholarship

//  showdata.append(info4)
//  showdata.append(info5)
//  showdata.append(info6)
