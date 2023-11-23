function sendMail(){
   var params = {
    name:document.getElementById("Name").value ,
    email:document.getElementById("Email").value,
    message:document.getElementById("Message").value,
    };
   const serviceID="service_4hy3kck";
   const templateID="template_st9swl2";

  emailjs.send(serviceID,templateID,params)
   .then(
    res=>{
        document.getElementById("Name").value ="";
        document.getElementById("Email").value ="";
        document.getElementById("Message").value ="";
        console.log(res);
        alert("your message sent successfully");
    })
        .catch((err)=> console.log(err));
}