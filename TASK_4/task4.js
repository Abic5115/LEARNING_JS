
var numbers = [5,5,5,5,5,5,10]
var sum=0;
for(let i=0;i<numbers.length;i++)
{
    sum=sum+numbers[i]
} 
    do{
        
        if (sum>=20)
        {
            var removedElement = numbers.shift();
        
            sum=sum-removedElement;
          
        }
        else{
            
            console.log("the sum is less than 20")
          break;
        }
        

    }while(sum>=20)
        

console.log(numbers)
