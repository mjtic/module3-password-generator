// Password generator
// User 'click' the button
// After 'click' the button series of prompts displays
// User select which criteria to include
// Prompts: length 8~128 characters
// Prompts: lowercase, uppercase, numeric, and/or special characters
// Input should be validated at least one character type selected
// All prompts chosen password generated should match the selected criteria
// Display as alert or written to the page


// Assignment Code
var generateBtn = document.querySelector("#generate");

// array for: lowerCase, upperCase, number, and specialCharacters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacters = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
"-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
