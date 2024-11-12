let cartt = document.getElementById("cart1");
let quantity1 = 0;
function addfruit(item) {
  var allparagraph = document.querySelectorAll("p");
  console.log(allparagraph)
  let flag = false;
  for (let i = 0; i < allparagraph.length; i++) {
    console.log(allparagraph[i].innerText)
    console.log(allparagraph[i].innerText.includes(item))
    if (allparagraph[i].innerText.includes(item)) {
        
      flag = true;
      let temp = parseInt(allparagraph[i+1].innerText)
      temp += 1
      allparagraph[i+1].innerText = temp
      break;
    }
  }

  if (!flag) {
    let paragraph1 = document.createElement("p");
    paragraph1.textContent = item;
    cartt.appendChild(paragraph1);

    quantity1 = 1;
    var paragraph2 = document.createElement("p");
    paragraph2.textContent = quantity1;
    cartt.appendChild(paragraph2);
  } else {
    quantity1 += 1;

  }
}










