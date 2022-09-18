// Assignment code here




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   //var password = generatePassword();
   var passwordText = document.querySelector("#password");
   var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  passwordText.value = password;

 // return chars[Math.floor(Math.random() * chars.length)];

}

// console.log(writePassword());

function prompt() {
  var upperCase = prompt("Include an upper case letter in password?");

  if (upperCase != null) {
    console.log("test")
  }




  let lowerCase = prompt("Include an lower case letter in password?");
  let number = prompt("Include a number in password?");
  let specialCharacter = prompt("Include a special character in password?");

 }



// Add event listener to generate button
generateBtn.addEventListener("click", prompt());
