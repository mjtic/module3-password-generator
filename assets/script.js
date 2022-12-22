
// global var
// array for: lowerCase, upperCase, number, and specialCharacters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacters = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
"-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn);

// must return a string value that is the password.
function generatePassword(){
    var tempPassword = ''
    var possibleCharacters = [];
    var userSelLow = false;
    var userSelUpp = false;
    var userSelNum = false;
    var userSelSpC = false;
// optional message, and to wait until the user dismisses the dialog.
  window.alert('User have four criteria options and must select at least one of the criterias');
// In JavaScript NaN is short for "Not-a-Number".
// The isNaN() method returns true if a value is NaN.
// The isNaN() method converts the value to a number before testing it.
  // Prompt user to choose num btwn 8 and 128 (display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.)
  // make  sure user enters a number
  var confirmLength = prompt('How long of characters should your password be? Choose between 8 - 128');
  // make sure user entered a number between 8 -128
  console.log(confirmLength)
  if (isNaN(parseInt(confirmLength)) || confirmLength < 8 || confirmLength > 128) {
    alert ('Please choose your password length between 8 - 128')
   return;
  } 
  // does user want lowercase letters
  userSelLow = confirm ('Should your password contain lowercase?')
  if(userSelLow) {
    possibleCharacters.push(...lowerCase)
    console.log(possibleCharacters)
  }
  // uppercase
  userSelUpp = confirm ('Should your passoword contain uppercase?')
  if(userSelUpp) {
    possibleCharacters.push(...upperCase)
    console.log(possibleCharacters)
  }
  //special
  userSelSpC = confirm ('Should your password contain Special Chracters?')
  if(userSelSpC) {
    possibleCharacters.push(...specialCharacters)
    console.log(possibleCharacters)
  }
  // numbers
  userSelNum = confirm ('Should your password contain numbers?')
  if(userSelNum) {
    possibleCharacters.push(...number)
    console.log(possibleCharacters)
  } 
  if (!userSelLow && !userSelNum && !userSelNum && !userSelSpC ){
    alert('User must select at least one of the criteria!')   
    return;
  }
  for (var i = 0; i < confirmLength; i++) {
    var randomCharacter = possibleCharacters[Math.floor(Math.random()*possibleCharacters.length)] 
    tempPassword += randomCharacter;
  }
   //based on user answers add characters to possible char array

  console.log(tempPassword);
  return tempPassword;
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


// }





