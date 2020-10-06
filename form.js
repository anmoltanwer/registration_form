console.log("hello")

var submitBtn = document.getElementById('btn');
var lastName = document.getElementById('lnameDiv')
var email = document.getElementById('emailDiv')
var num = document.getElementById('numDiv')
var pass = document.getElementById('passDiv')
var confirmPass = document.getElementById('confirmPasDiv')
var DOB = document.getElementById('DOBDiv')
var wrongPass = document.getElementById('wrongPass')

document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault()
});


const checkPass = () => {
    if (document.getElementById('password').value == document.getElementById('confirmPas').value) {
          wrongPass.style.display = 'none';
          alert("Successfully registered!!")
        
    } else {
        wrongPass.style.display = 'block';
    }
}

const showLastName = () => {
  lastName.style.display = 'block';
}

const showEmail = () => {
  email.style.display = 'block';
}

const showNumber = () => {
  num.style.display = 'block';
}

const showPass = () => {
  pass.style.display = 'block';
}

const showConfirmPass = () => {
  confirmPass.style.display = 'block';
}
 const showDOB = () => {
   DOB.style.display = 'block';
 }

  const showBtn = () => {
   submitBtn.style.display = 'block';
 }
