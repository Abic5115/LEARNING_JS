let pro = new Promise((resolve,reject) =>{
let k= 1+2
if(k==3){
    resolve('success')
}
else{
    reject('failed')
}
})

pro.then((message)=>{
console.log("the message is "+message)
}).catch((message)=>{
    console.log("the meassageis" + message)
})