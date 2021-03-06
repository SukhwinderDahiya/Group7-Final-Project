

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const cname = document.getElementById('cname');
const email = document.getElementById('email');

const cnumber = document.getElementById('cnumber');
const address = document.getElementById('address');
const agree = document.getElementById('agree');




form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const nameValue = name.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const cnameValue = cname.value.trim();
    const emailValue = email.value.trim();
    
    const cnumberValue = cnumber.value.trim();
    const addressValue = address.value.trim();
     const agreeValue = agree.value.trim();
   

    if (nameValue === '') {
        setErrorFor(name, 'User name cannot be blank');
    } else {
        setSuccessFor(name);
    }

   
 if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else if (!confirmpassword(passwordValue)) {
        setErrorFor(password, 'min 8 letter password, with at least a symbol, upper and lower case letters and a number');
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Confirm Password cannot be blank');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Confirm Password does not match');
    } else {
        setSuccessFor(password2);
    }






    if (cnameValue === '') {
        setErrorFor(cname, 'Compny name cannot be blank');
    } else {
        setSuccessFor(cname);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

   

     if (cnumberValue === '') {
        setErrorFor(cnumber, 'Number cannot be blank');
    } else {
        setSuccessFor(cnumber);
    }

    if (addressValue === '') {
        setErrorFor(address, 'Address cannot be blank');
    } else {
        setSuccessFor(address);
    }

    
}



function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function confirmpassword(password) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
}


/*Captcha*/

let captchaText = document.querySelector('#captcha');
let userText = document.querySelector('#textBox');
let submitButton = document.querySelector('#csubmit');
let output = document.querySelector('#output');
let refreshButton = document.querySelector('#refresh');

let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let emptyArr = [];
for(let i = 1; i <= 7; i++) {
    emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
captchaText.innerHTML = emptyArr.join('');

userText.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        if(userText.value === captchaText.innerHTML) {
            output.classList.add("greenText");
            output.innerHTML = "Correct!";
        } else {
            output.classList.add("redText");
            output.innerHTML = "Incorrect, please try again";
        }
    }
});

submitButton.addEventListener('click',  function() {
    if(userText.value === captchaText.innerHTML) {
        output.classList.add("greenText");
        output.innerHTML = "Correct!";
    } else {
        output.classList.add("redText");
        output.innerHTML = "Incorrect, please try again";
    }
});

refreshButton.addEventListener('click', function () {
    userText.value = "";
    let refreshArr = [];
    for(let j = 1; j <= 7; j++) {
        refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    captchaText.innerHTML = refreshArr.join('');
    output.innerHTML = "";
});

submitButton.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
    if(userText.value === captchaText.innerHTML) {
        console.log("correct!");
        output.classList.add("greenText")
        output.innerHTML = "Correct!";
    } else {
        output.classList.add("redText");
        output.innerHTML = "Incorrect, please try again";
    }
    }
});

function validateForm(form)
{
    console.log("checkbox checked is ", form.agree.checked);
    if(!form.agree.checked)
    {
        document.getElementById('agree_chk_error').style.visibility='visible';
        return false;
    }
    else
    {
        document.getElementById('agree_chk_error').style.visibility='hidden';
        window.location.replace("./index.html");
        return true;
    }
}



/*Contact Form*/

function tc(a){
  var x = document.querySelector(a).value;
  return x;
}
function msg(a){
  var x = document.querySelector(".emsg").innerHTML=a;
  return x;
}
function msgb(a){
  var x = document.querySelector(".emsgb").innerHTML=a;
  return x;
}
function size(a){
  var x = document.querySelector(a).value.length;
  return x;
}
// show hide function
//var idhide=document.getElementById("singup");
function singu() {
  var hide=document.querySelector(".form-login");

  if (hide.classList[1]=="hidden") {
    hide.classList.toggle("visible");
  }else {
    hide.classList.toggle("hidden");
  }
  console.log(hide.classList);
  return hide;
}
// Sing up
function singup(){
  if (tc(".fname")==null || tc(".fname")=="") {
    msgb("Please Enter First name");
    return false;
  }
  if (tc(".lname")==null || tc(".lname")=="") {
    msgb("Please Enter Last name");
    return false;
  }
  if (tc(".email")==null || tc(".email")=="") {
    msgb("Please Enter Email");
    return false;
  }
  
}
