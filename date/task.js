let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let text1 = document.getElementById('text1');

var data1

function clickme(){
    data1 = setTimeout(hello,1000)
    function hello(){
        var date = new Date()
        text1.innerHTML = date.toLocaleTimeString()
        
    }
}













// var time1 = setInterval(hello,2000)

// function hello(){
//     alert("hello")
//    text1.innerHTML = text1.innerHTML + "hello"
// }

// function destroy(){
// clearInterval(time1)
// }



//     function clickme(){
   
    

//         let free = async()=>{
//         var p = setTimeout(hello,3000)
//         function hello(){
//             text1.innerHTML = "hi"
//         }
//     }       
//     console.log("hello world")


// }

