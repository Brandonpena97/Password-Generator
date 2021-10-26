// Assignment code here
function generatePassword() {
  var generatedString = ""

  var passwordLength = prompt("What is the length of your password?")
  console.log(passwordLength)

  // more questions
  var includeUppercase = confirm('Do you want to include uppercase?')
  var includeLowercase = confirm('Do you want to include lowercase?')
  var includeNumbers = confirm("Do you want to include numbers?")
  var includeCharaters = confirm("Do you want special charaters?")

  
  var selectedSet = [];

  var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowercaseLetters = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numbers = ["1","2","3","4","5","6","7","8","9","10"];
  var specialCharaters = ["!","@","#","$","%","^","&","*","(",")"];


  if(includeUppercase == true) {
    selectedSet = selectedSet.concat(uppercaseLetters)
  }

  if(includeLowercase == true) {
    selectedSet = selectedSet.concat(lowercaseLetters)
  }

  if(includeNumbers == true) {
    selectedSet = selectedSet.concat(numbers)
  }

  if(includeCharaters == true) {
    selectedSet = selectedSet.concat(specialCharaters)
  }



  for (let index = 0; index < passwordLength; index++) {

    var randomNum = Math.random() * selectedSet.length // ---> 7.6333325  ///  12.13123
    var wholeNum = Math.floor(randomNum) // ---> 7   /// 12

    console.log(wholeNum)
    console.log(selectedSet[wholeNum])

    generatedString = generatedString + selectedSet[wholeNum]

  }


  return generatedString
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // var password = "Hello World"
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
