// Password generator
// User 'click' the button
// After 'click' the button series of prompts displays
// User select which criteria to include
// Prompts: length 8~128 characters
// Prompts: lowercase, uppercase, numeric, and/or special characters
// Input should be validated at least one character type selected
// All prompts chosen password generated should match the selected criteria
// Display as alert or written to the page


// global var
// array for: lowerCase, upperCase, number, and specialCharacters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacters = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
"-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]

var possibleCharacters = [];


var userSelLow = false;
var userSelUpp = false;
var userSelNum = false;
var userSelSpC = false;


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
console.log(generateBtn);



// must return a string value that is the password.
function generatePassword(){

// In JavaScript NaN is short for "Not-a-Number".
// The isNaN() method returns true if a value is NaN.
// The isNaN() method converts the value to a number before testing it.
   
  // Prompt user to choose num btwn 8 and 128 (display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.)
  // make  sure user enters a number
var confirmLength = prompt('How long of characters should your password be? Choose between 8 - 128');
  // make sure user entered a number between 8 -128
if (isNan(parseInt(confirmLength) || confirmLength < 8 || confirmLength > 128)) {
    alert ('Please choose your password length between 8 - 128')
} 
  // does user want lowercase letters
  userSelLow = confirm ('Should your password contain lowercase?')
  if(userSelLow === 'true') {
  possibleCharacters.push(...lowerCase)
  }
  // uppercase
  userSelUpp = confirm ('Should your passoword contain uppercase?')

  //special
  userSelSpC = confirm ('Should your password contain Special Chracters?')

  // numbers
  userSelNum = confirm ('Should your password contain numbers?')

  //based on user answers add characters to possible char array






    //  var to save length
    //  validate user num 
  // confirm user upper, lower, num, special characters ( 4 confirm prompts)
    
    // 4 vars to save T/F to included characters
    // Validate that atleast one cat was chosen
  // Vars that include all user options of each category. Array of string for each cat.
  // var upper = [" A", "B"]
  // If user says yes to include that cat choose random(Math.random) elements from the array
    // How to decide how many elements to choose from each array
  //
  // Join chosen elements into a string
  // return passwordString; 


};

// must return a string value that is the password.
function generatePassword(){

  // optional message, and to wait until the user dismisses the dialog.
  window.alert('User have four criteria options and must select at least one of the criterias');
  
  // Prompt user to choose num btwn 8 and 128 (display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.)
  // make  sure user enters a number
  confirmLength = prompt('How long of characters should your password be? Choose between 8 - 128')
  parseInt(confirmLength) > 8 && parseInt (confirmLength) <128;

  // make sure user entered a number between 8 -128
  

  // does user want lowercase letters
  userSelLow = confirm ('Should your password contain lowercase?')
  if(userSelLow === 'true') {
  possibleCharacters.push(...lowerCase)
  }
  // uppercase
  userSelUpp = confirm ('Should your passoword contain uppercase?')

  //special
  userSelSpC = confirm ('Should your password contain Special Chracters?')

  // numbers
  userSelNum = confirm ('Should your password contain numbers?')

  //based on user answers add characters to possible char array






    //  var to save length
    //  validate user num 
  // confirm user upper, lower, num, special characters ( 4 confirm prompts)
    
    // 4 vars to save T/F to included characters
    // Validate that atleast one cat was chosen
  // Vars that include all user options of each category. Array of string for each cat.
  // var upper = [" A", "B"]
  // If user says yes to include that cat choose random(Math.random) elements from the array
    // How to decide how many elements to choose from each array
  //
  // Join chosen elements into a string
  // return passwordString; 


};





