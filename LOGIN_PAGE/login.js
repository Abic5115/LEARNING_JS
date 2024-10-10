var button1 = document.getElementById("button")

button1.addEventListener('click', () => {
    let user1 = document.getElementById("username").value
    let pass1 = document.getElementById("password").value
 
    let storeddetails = JSON.parse(localStorage.getItem('studentdet') || '[]')
    let connect = false;
    for(let i=0;i<storeddetails.length;i++)
      {
        if ( storeddetails[i].username1  === user1 &&  storeddetails[i].password1===  pass1 ){
            connect =true;
        break;}
      }


     if(connect )
     {
        window.location.href = "welcome.html";


    }
    else {
        document.getElementById("message").innerHTML = "invalid user ..please sign up"
    }

})


