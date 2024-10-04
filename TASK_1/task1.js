var totalcost= 0;
var totalcost=0;

    var quantity = prompt("enter number of item");
    var item_price = prompt("enter the price of the item");
   
    totalcost= item_price*quantity


var discount = 0;

if(totalcost>100)
{
    discount=totalcost*10/100;
    totalcost=totalcost-discount;
    console.log("discounted price is",totalcost)
}
else{
    console.log(totalcost)
}

var A= (totalcost%2==0) ? console.log("totalcost is even") : console.log("totalcost is odd"); 