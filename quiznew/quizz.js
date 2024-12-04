let main = document.getElementById("main");
let score = 0;
let totalscore = 0;
let submit1 = document.getElementById("submit1");
let addmail = prompt("enter your email id");

let storeddata = JSON.parse(localStorage.getItem("userdataadd")) || [];
let useranswers = [];

var fetchdata = async () => {
  var response = await fetch("quizz.json");
  var data = await response.json();
  let par2 = document.createElement("p");
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    // adding div
    let box1 = document.createElement("div");
    box1.id = "box1";
    main.appendChild(box1);

    // adding question

    let que = document.createElement("h1");
    que.textContent = data[i].question;
    box1.appendChild(que);

    // adding paragraph
    for (let j = 0; j < data[i].options.length; j++) {
      let paragraph = document.createElement("p");
      paragraph.textContent = data[i].options[j];
      box1.appendChild(paragraph);
    }

    // adding inputbox

    let inputbox = document.createElement("input");
    inputbox.type = "text";
    box1.appendChild(inputbox);

    //adding button

    let button1 = document.createElement("button");
    button1.textContent = "submit";
    box1.appendChild(button1);

    let storeddata = JSON.parse(localStorage.getItem("userdataadd")) || [];
    for (let i = 0; i < storeddata.length; i++) {
      if (addmail === storeddata[i].usermail) {
        console.log("hi");
        inputbox.textContent = storeddata[i].answer1[i];
      }
    }

    let allparagraph = document.querySelectorAll("p");

    button1.addEventListener("click", () => {
      console.log(allparagraph);
      useranswers[i] = inputbox.value;
      if (inputbox.value == data[i].answer) {
        for (let i = 0; i < allparagraph.length; i++) {
          if (allparagraph[i].textContent == inputbox.value) {
            allparagraph[i].style.color = "green";
          }
        }

        let head = document.createElement("h1");
        head.textContent = "correct Answer";
        head.style.color = "green";
        box1.appendChild(head);
        score = 10;
      } else {
        // for(let j= 0;j<data.length;j++){
        // for(let i=0;i<allparagraph.length;i++){
        //     if(allparagraph[j].textContent !== data[j].answer ){
        //         allparagraph[j].style.color = "red"
        //     }

        // }}
        let head = document.createElement("h1");
        head.textContent = "wrong Answer";
        head.style.color = "red";
        box1.appendChild(head);
        score = 0;
      }

      score1(score);
    });

    function score1(item) {
      totalscore = totalscore + item;
      let newbox = document.createElement("div");
      main.appendChild(newbox);

      par2.textContent = " total score obtained is " + totalscore;
      newbox.appendChild(par2);
      console.log(totalscore);
    }
  }
};
submit1.addEventListener("click", () => {
  userdetails = {
    usermail: addmail,
    answer1: useranswers,
  };

  storeddata.push(userdetails);
  localStorage.setItem("userdataadd", JSON.stringify(storeddata));
});

fetchdata();
