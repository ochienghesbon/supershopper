var welcomeBtn = document.getElementById("welcomeBtn");
// var inputText = document.getElementById("text1")

 function landing() {
    window.location.assign("/assets/pages/page/landing-page/index.html");
   }

function validateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if (inputText.value.length === 0) {
    alert("Enter Email address")
} else {
    
    if(inputText.value.match(mailformat))
    {
    document.form1.text1.focus();
    verifyPassword1();
     return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    document.form1.text1.focus();
    return false;
    }}
}

function verifyPassword1(){
    var password1 = document.getElementById("password1").value;
    if (password1 != "" && password1.length>8 && password1.length<15) {
        landing();
    }else if (password1 == "") {
            alert('Enter password please')
        }
        else if (password1.length<8) {
            alert("password should be atleast 8 characters")
        }
        else if (password1.length>15) {
            alert("password shouldnt be more than 15 characters")
        }
    }
    
          





