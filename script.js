// Variables
var passwordLength = 8;
var options = "ABCDEFGHIJKLMNOPQRSTTUVWRJSKFH";

var symbol = "!@#$%^&*()";
var lowerCase = "abcdeffghijklmnopqrstuvwxyz";
var upperCase =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "023456789";

// Assignment code here
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Get references to the #generate element
function  writePassword() {
    if (passwordLength > 7 && passwordLength < 129) {

      let lowerCase = prompt ("Would you like to include lowercase in your password?");
      let upperCase = prompt ("would you like to include uppercase in your password?");
      let numbers = prompt ("Would you like to have number in your password?");
      let symbol = prompt ("Would you like to include smybols?");

      if (lowerCase !== "yes" && upperCase !== "yes" && number !== "yes" && symbol !== "yes"); {
        alert("Password Length must be 8 - 128 characters!");
      }

     if (confirm("would you like to choose numbers in you password?")) {
          options = options.concat(number);
        }

      if (confirm("would you like to choose symbols in you password?")) {
        options = options.concat(symbol);
    }

      if (confirm("would you like to choose uppercase in you password?")) {
        options = options.concat(upperCase);
    }

      if (confirm("would you like to choose numbers in you password?")) {
        options = options.concat(number);
    }
    var outcome = "";
    for (var i = 0; i <= passwordLength; i++) {
      var randomInput = math.floor(math.random() * options.length);
      outcome += options.substring(randomInput, randomInput +1);
    }
    return outcome;
  }
}

