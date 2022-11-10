// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var special = "!@#$%^&*()";
var randomArr = [];
var passArr = [];

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
function generatePassword() {

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
  var length = prompt("Choose a length of at least 8 characters and no more than 128 characters")
  if (length >= 8 && length <= 128) {

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    var selectLowercase = confirm("Would you like to include lowercase characters?")
    var selectUppercase = confirm("Would you like to include uppercase characters?")
    var selectNumber = confirm("Would you like to include numbers?")
    var selectSpecial = confirm("Would you like to include special characters?")

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// Added each kind of character one by one, but because it can be up to 4 types, it exceeds the chosen length
    for (var i = 0; i < length; i++) {
// If this type of character is selected, then add one of them to the password
      if (selectLowercase) {
        var randomNum = Math.floor(Math.random() * lowercase.length);
        randomArr.push(lowercase.substring(randomNum, randomNum + 1));
      }
      if (selectUppercase) {
        var randomNum = Math.floor(Math.random() * uppercase.length);
        randomArr.push(uppercase.substring(randomNum, randomNum + 1));
      }
      if (selectNumber) {
        var randomNum = Math.floor(Math.random() * numbers.length);
        randomArr.push(numbers.substring(randomNum, randomNum + 1));
      }
      if (selectSpecial) {
        var randomNum = Math.floor(Math.random() * special.length);
        randomArr.push(special.substring(randomNum, randomNum + 1));
      }
      if (selectLowercase || selectUppercase || selectNumber || selectSpecial) {
      } else {
        alert("You must select at least one character type")
      }
    }
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// Pulling only the chosen length amount of characters from previous password array, assuring each kind of charaacter is used
    for (var i = 0; i < length; i++) {
      passArr.push(randomArr[i])
    }
// Joining the new array into a string
    var withoutCommas = passArr.join('');
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
    return withoutCommas;
  } else {
    alert("You must enter a length of at least 8 characters and no more than 128 characters")
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
