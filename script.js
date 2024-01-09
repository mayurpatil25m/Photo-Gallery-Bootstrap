function validate() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
     let message = document.getElementById("message").value;

    let body = "Name : " +  name + "<br/>Email : "+ email + "<br/>Message : "+ message ;

    

    Email.send({
        SecureToken: "d3efa8cb-084a-48a3-b1a3-2875e3a889d6",
        To: 'mp24252425@gmail.com' ,
        From: "mp24252425@gmail.com" ,
        Subject: "Message from " + name ,
        Body: body 
    }).then(
        message => alert(message)
    );


}