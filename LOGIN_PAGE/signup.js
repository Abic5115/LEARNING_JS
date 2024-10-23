let button1 = document.getElementById("button")
let messagepop1 = document.getElementById("message1")
let messagepop2 = document.getElementById("message2")
let messagepop3 = document.getElementById("message3")

button1.addEventListener('click', () => {

   
  
     
    let user = document.getElementById('username').value
    let userflag =false
    if (user.length < 6) {
        messagepop1.textContent = "length is less than 6"
       
    } 
    else {
        console.log("username:", user)
        userflag = true
    }


    let mail = document.getElementById('email').value
    let mailflag=false
    if ((!mail.endsWith('@gmail.com')) && (!mail.endsWith('@yahoo.com'))) {
        messagepop2.textContent = "enter a valid email id"
        
    }
    
    else {
        console.log("mail:", mail)
        mailflag=true
       
    }
    let passflag=false
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    const number = /[0123456789]/;
    let pass = document.getElementById('password').value
    if (pass.length < 6) {
        messagepop3.textContent = "enter password with minimum 6 characters"
       
    }
    else if (!specialCharPattern.test(pass)) {
        messagepop3.textContent = "enter password with one specialcharacter"
        
    }
    else if(!number.test(pass)){
        messagepop3.textContent = "enter password with number"
        
    }
    
 
else {
        console.log("password:", pass)
       passflag=true
    }
    if( userflag==true && mailflag ==true && passflag==true){
   let check = JSON.parse(localStorage.getItem ('studentdet')) || []
    let details=[]
    
        let signupdetails ={
            email1:mail,
            password1:pass
        };
         
        check.push(signupdetails)
        localStorage.setItem('studentdet', JSON.stringify(check))
        document.getElementById('name1').value = '';
        document.getElementById('email1').value = '';
        document.getElementById('pass1').value = '';
        document.getElementById('pass2').value = '';
        
    }
else{
    alert("enter valid details")
}










})