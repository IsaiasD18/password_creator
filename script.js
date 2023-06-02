// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Different arrays
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '<', '>', '.', '?', '/'];
var combined = []

//create a function that gathers the user's choices

function myFunction() {
  var amount = Number(prompt('Please provide an amount'));
  var includeLowercase = confirm('Click OK to include lowercase letters')
  var includeUppercase = confirm('Click OK to include uppercase letters')
  var includeNumbers = confirm('Click OK to include numbers letters')
  var includeSpecialCharacters = confirm('Click OK to special characters letters')
  
  return [amount, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters];
}

var choises = myFunction();


// create a function that creates an array of combined characters sets based on the user's choices

function generatePass() {
  var combinedChars = [];
  var passw = '';
 

  var includeLowercase = choises[1];
  var includeUppercase = choises[2];
  var includeNumbers = choises[3];
  var includeSpecialCharacters = choises[4];

  if (includeLowercase) {
      combinedChars = combinedChars.concat(lowercase);
  }

  if (includeLowercase) {
      combinedChars = combinedChars.concat(uppercase);
  }

  if (includeLowercase) {
      combinedChars = combinedChars.concat(numbers);
  }

  if (includeLowercase) {
      combinedChars = combinedChars.concat(specialCharacters);
  }

  for (var count = 0; count < choises[0]; count++) {
      var ranIndex = Math.floor(Math.random() * combinedChars.length)

      passw += combinedChars[ranIndex];
  }

  return passw;
}

var pass = generatePass();
console.log(pass);