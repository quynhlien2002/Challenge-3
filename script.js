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

  var choices = "";
  var answer;

  
  var userChoice = window.prompt("How long is your password?");
  console.log(userChoice);
  if (!userChoice) {
    return "";
  }


  var confirmLowerCase = window.confirm ("Do you want to include lowercase?");
  
  if(confirmLowerCase) {
    choices += "abcdefghijklmnopqrstuvwxyz";
  } 
  var confirmUpperCase = window.confirm ("Do you want uppercase?");

  if (confirmUpperCase) {
    choices +=  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } 
  var confirmNumeric = window.confirm ("Do you want to contain number?");

  if (confirmNumeric) {
    choices += "0123456789";
  }
  
  var confirmSpecialCharacter = window.confirm ("Do you want special characters?");

  if (confirmSpecialCharacter) {
    choices += "!@#$`~%^&*()_-+=|]{['";
  }

  if (choices == ""){
      alert("Please select at least 1 option");
      return "";
  }
  
    var addToAnswer = "";
    console.log(choices);

    for (var i = 0; i < parseInt (userChoice); i++){
        var index = Math.floor (Math.random() * choices.length)
        addToAnswer += choices [index]
        console.log(addToAnswer)
    }
  
return addToAnswer;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

