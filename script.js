// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = myFunction();
  var passwordText = document.querySelector("#password");
  
  //cretate an if statement to not get undefined when the user does not meet the criteria to generate a password
  if (password) {
    passwordText.value = password;
  } else {
    passwordText.value = '';
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Create different arrays of options for the user to choose 
var lower = ['i', 's', 'a'];
var upper = ['I', 'S', 'A'];
var numbers = [0, 1, 2, 3];
var characters = ['!', '@', '#'];




//create a function that gathers the user's choices and present the user a series of prompts for password criteria.

function myFunction() {
  // var quantity = Number(prompt('Please provide an quantity between 8 and 128'));
  var includeLowercase = confirm('Click OK to include lowercase letters')
  var includeUppercase = confirm('Click OK to include uppercase letters')
  var includeNumbers = confirm('Click OK to include numbers letters')
  var includeSpecialCharacters = confirm('Click OK to special characters letters')
  var quantity = Number(prompt("Please provide a number between 8 to 128"));

  //cretate an if statment for the password length to be between value 8 to 128, and also create an statement for the user to only use numbers
  if (isNaN(quantity)) {
    alert("You must input a number. Try again!!");
    return;
  } else if (quantity < 8 || quantity > 128) {
    alert("The password length can be only between 8 to 128. Please try again!!");
    return;
  };


  //create an empty array which will contain the user's choises
  var combinedChars = [];

  //create a variable that will store the user's password
  var passw = '';

  // create a variable for the different all the arrays
  var includeLowercase = includeLowercase;
  var includeUppercase = includeUppercase;
  var includeNumbers = includeNumbers;
  var includeSpecialCharacters = includeSpecialCharacters;

  //Cretate an if statement to make sure the user's choose at least one of the set of characters for the password
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
    alert("You must press OK at least once. Try again! ");
    return;
  } else

    //Concatenate or combine my variables of choises into my empty array : cominedChars
    if (includeLowercase) {
      combinedChars = combinedChars.concat(lower);
    }

  if (includeUppercase) {
    combinedChars = combinedChars.concat(upper);
  }

  if (includeNumbers) {
    combinedChars = combinedChars.concat(numbers);
  }

  if (includeSpecialCharacters) {
    combinedChars = combinedChars.concat(characters);
  }

  //create a for loop so it can run the amount of digits that the user wants in its random password
  for (var count = 0; count < quantity; count++) {
    var ranIndex = Math.floor(Math.random() * combinedChars.length)

    //assigned the random password created to my variable passw which has the empty string 
    passw += combinedChars[ranIndex];
  }

  return passw;

}

