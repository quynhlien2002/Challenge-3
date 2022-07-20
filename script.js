// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  console.log("Generate Password");

  var choices;
  var answer;
  
  var userChoice = window.prompt("How long is your password?");
  if (!userChoice) {
    return;
  }

  var confirmLowerCase = window.confirm ("Do you want to include lowercase?");
  if (confirmLowerCase) {
    choices = choices + "abcdefghi"
    var confirmUpperCase = window.confirm ("Do you want uppercase?");
  }
  if (confirmUpperCase) {
    choices = choices + "ABCDE"
    var confirmNumeric = window.confirm ("Do you want to contain number?");
  }
  if (confirmNumeric) {
    choices = choices + "0123456789"
    var confirmSpecialCharacter = window.confirm ("Do you want special characters?");
  }
  if (confirmSpecialCharacter) {
    choices = choices + "!@#$"}

for (var i = 0; i < parseInt (userChoice); i++){
  var index = Math.floor (Math.random() * choices.length)
  var addToAnswer = choices [index]
  console.log(addToAnswer)
}
  
return "This will be your password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

