let cartt = document.getElementById("cart1");

function addfruit(item) {
  var allparagraph = document.querySelectorAll("p");
  console.log(allparagraph)
  let flag = false;
  for (let i = 0; i < allparagraph.length; i++) {
    
    if (allparagraph[i].innerText.includes(item)) {
        
      flag = true;
      let temp = parseInt(allparagraph[i+1].innerText)
      temp += 1
      allparagraph[i+1].innerText = temp
      break;
    }
  }
console.log(flag)
  if (!flag) {
    let paragraph1 = document.createElement("p");
    paragraph1.textContent = item;
    cartt.appendChild(paragraph1);

    quantity1 = 1;
    var paragraph2 = document.createElement("p");
    paragraph2.textContent = quantity1;
    cartt.appendChild(paragraph2);
  
}
}










// let cartitem = ["apple", "orange", "mango"];
// let main1 = document.getElementById('main1');
// let cartt = document.getElementById('cart1');

// function itemadd() {
//   // Loop through the cartitem array and create item boxes
//   for (let i = 0; i < cartitem.length; i++) {
//     let box1 = document.createElement('div');
//     box1.id = "box1";

//     // Create an <h1> element to display the item name
//     let item1 = document.createElement('h1');
//     item1.innerHTML = cartitem[i];
//     console.log(cartitem[i]);
//     box1.appendChild(item1);

//     // Create a button for each item
//     let button1 = document.createElement('button');
//     button1.textContent = "Add to Cart";
    
//     // Add event listener to button to add the item to the cart
//     button1.addEventListener("click", function () {
//       addfruit(cartitem[i]);
//     });

//     box1.appendChild(button1);
//     main.appendChild(box1);
//   }
// }

// function addfruit(item) {
//   let allparagraph = document.querySelectorAll("p");
//   console.log(allparagraph);
//   let flag = false;

//   // Check if item is already in the cart
//   for (let i = 0; i < allparagraph.length; i++) {
//     if (allparagraph[i].innerText.includes(item)) {
//       flag = true;
//       let quantity = parseInt(allparagraph[i + 1].innerText);
//       quantity += 1;
//       allparagraph[i + 1].innerText = quantity; // Update the quantity
//       break;
//     }
//   }

//   // If item is not in cart, add it with quantity 1
//   if (!flag) {
//     let paragraph1 = document.createElement("p");
//     paragraph1.textContent = item;
//     cartt.appendChild(paragraph1);

//     let paragraph2 = document.createElement("p");
//     paragraph2.textContent = 1; // Initial quantity is 1
//     cartt.appendChild(paragraph2);
//   }
// }

// // Call the function to display items
// itemadd();