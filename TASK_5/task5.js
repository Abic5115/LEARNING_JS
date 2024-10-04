var numbers = []
numbers.push(10)
numbers.push(20)
numbers.push(30)
console.log("the new array is" ,numbers)
numbers.pop()
console.log("the new array after removing is" ,numbers)
numbers.unshift("hello")
numbers.splice(1,0,"world")
console.log("the new array after adding strings is" ,numbers)
numbers.shift()
console.log("the new array after removing is" ,numbers)
 let newarray=numbers.slice(0,4)
console.log("the new array using slice is" ,newarray)
let splicearray = [10,20,30,"world",10,20]
splicearray.splice(1,3)
console.log("the new array using slice is" ,splicearray)
var numbers1 = [10,11,15,20,25,28,30,46,41,45]
console.log("the new array is",numbers1)
var dummy1 = []
for(let i=0; i<= numbers1.length ;i++)
{
    if(numbers1[i]<40)
    {
        dummy1.push(numbers1[i])
        
    }
    
}
console.log("new array is",dummy1)

var filtered_array=numbers1.filter(function(value){
    return value<40
})


console.log("new array using filter method is",filtered_array)

var newfiltered = filtered_array.map( n=> n=n*2)
console.log("new array using map function is",newfiltered)
