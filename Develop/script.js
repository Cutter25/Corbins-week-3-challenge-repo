// Assignment code here
var pswrdLength = 8;
var paramterCharacters = [];

var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','-'];
var lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numberCharacters = ['1','2','3','4','5','6','7','8','9','0',];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   //var password = generatePassword();
   var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {


}

function prompts() {
  pswrdLength = parseInt(prompt("Bewtween 8 and 128, how many characters would you like your password to be?"));

  if(isNaN(pswrdLength) || pswrdLength < 8 || pswrdLength > 128)
    alert("Character length must be in between 8 and 128 characters. Try again.");
    return false;
}

if (confirm("Would you like to include lower case letters in your password?")) {
  paramterCharacters = paramterCharacters.concat(specialCharacters);
}

if (confirm("Would you like to include lower case letters in your password?")) {
  paramterCharacters = paramterCharacters.concat(lowerCaseCharacters);
}

if (confirm("Would you like to include upper case letters in your password?")) {
  paramterCharacters = paramterCharacters.concat(upperCaseCharacters);
}

if (confirm("Would you like to include numbers in your password?")) {
  paramterCharacters = paramterCharacters.concat(numberCharacters);
}

// Add event listener to generate button
generateBtn.addEventListener("click", prompt());
