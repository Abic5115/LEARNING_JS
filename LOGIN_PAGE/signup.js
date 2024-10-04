let button1 = document.getElementById("button")
let messagepop1 = document.getElementById("message1")
let messagepop2 = document.getElementById("message2")
let messagepop3 = document.getElementById("message3")

button1.addEventListener('click', () => {

    let user = document.getElementById('username').value
    if (user.length < 8) {
        messagepop1.textContent = "length is less than 8"
    }
    else {
        console.log("username:", user)
        localStorage.setItem('username',JSON.stringify(user))
    }
    let mail = document.getElementById('email').value
    if ((!mail.endsWith('@gmail.com')) && (!mail.endsWith('@yahoo.com'))) {
        messagepop2.textContent = "enter a valid email id"
    }
    else {
        console.log("mail:", mail)
        localStorage.setItem('gmail',JSON.stringify(mail))
    }
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
        localStorage.setItem('password',JSON.stringify(pass))
    }

    console.log("email:", mail)
    console.log("password:", pass)
})