function sendmail()
{
let parms = 
{
name : document.getElementById("name").value,
subject : document.getElementById("phone").value,
messege : document.getElementById("messege").value,
email : document.getElementById("email").value,


}
emailjs.send("service_yn9ho08", "template_titm198", parms)


}