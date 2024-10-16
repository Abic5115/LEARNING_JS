
let vehicle = ["car","bike","lorry","bus"]
let vehicle_search = prompt("enter the vehicle")
var i=0;
flag=false
while(i<vehicle.length)
{
    if(vehicle_search===vehicle[i])
    {
    
            flag=true;
            break;
    }
    i++

}
if(flag==true){
    console.log("vehicle found")
}
else{
    console.log("vehicle not found")
}