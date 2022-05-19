var welcomeBtn = document.getElementById("welcomeBtn");
// var inputText = document.getElementById("text1")

 function Landing() {
    window.location.assign("/assets/pages/page/landing-page/index.html");
   }

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if (inputText.value.length === 0) {
    alert("Enter Email address")
} else {
    
    if(inputText.value.match(mailformat))
    {
    document.form1.text1.focus();
    Landing();
     return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    document.form1.text1.focus();
    return false;
    }}
}

