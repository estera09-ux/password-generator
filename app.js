// password input
const passwordElement = document.querySelector("#password");
// reference to every check boxes
const lengthElement = document.querySelector("#length");
const uppercaseElement = document.querySelector("#uppercase");
const lowercaseElement = document.querySelector("#lowercase");
const numbersElement = document.querySelector("#numbers");
const symbolsElement = document.querySelector("#symbols");

// reference to the button and the clipboard
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', generatePassword);


const copyBtnElement = document.querySelector("#copy");
copyBtnElement.addEventListener('click', copyPassword)

// the strings of character

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numbersChars = "0123456789";
const symbolsChars = "!#@&%*(){[$";


function generatePassword() {
    // refrence to the password we gonna generate
    let password = "";
    let length = lengthElement.value;
    let characters = "";

    // if this is true then we add the respective chars otherwise it an empty string
    characters += uppercaseElement.checked ? uppercaseChars : "";
    characters += lowercaseElement.checked ? lowercaseChars : "";
    characters += numbersElement.checked ? numbersChars : "";
    characters += symbolsElement.checked ? symbolsChars : "";
    
   for (let i = 0; i <= length; i++) {
         let randomPassword = Math.floor(Math.random()  * characters.length);
         // this will cut  the string at that character and added to the password
         password += characters.substring(randomPassword, randomPassword + 1);
   }

   passwordElement.value = password;

}




async function copyPassword() {
   if (navigator.clipboard) {
      await navigator.clipboard.writeText(passwordElement.value);
      alert("Password copied to clipboard")
   }
}




