




function Submit(){

    console.log('Added');
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var Subject = document.getElementById("Subject").value;
    var Message = document.getElementById("Message").value;
    
    var list = "Firstname: "+firstName+"<br>Lastname:"+lastName+"<br>Email:" +email+ "<br>Subject: "+Subject+"<br>Message: "+Message;
    
    console.log(list);
}
