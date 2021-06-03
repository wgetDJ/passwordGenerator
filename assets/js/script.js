const upperCase = ["A", "B", "C", "D", "E" , "F" , "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = [" ", "!", "'", '"', "(", ")", "*", "+", ",", "-", "_", ".", "/", ":", ";", "<", ">", "=", "?", "[", "]", "\\", "^", "`", "~", "{", "}"];

const allCharacters = [upperCase, lowerCase, numbers, specialCharacters];

const btn = document.querySelector("#btn");
const copy = document.querySelector("#copy");
const placeHolder = document.querySelector("#placeHolder");
const yourPassword = document.querySelector("#yourPassword");
const message = document.querySelector("#msg");
const uCase = document.querySelector("#upperCase");
const lCase = document.querySelector("#lowerCase");
const nums = document.querySelector("#numbers");
const splChar = document.querySelector("#specialCharacter");

const randomCharacter = (allCharacters, checkBoxValues) => {
    let character = "";
    let availableCharacters = [];
    
    for (let i = 0; i < checkBoxValues.length; i++) {
        if (checkBoxValues[i] != false) {
            availableCharacters.push(allCharacters[i]);
        }
    }

    let randomCheckBoxValue = Math.floor(Math.random() * availableCharacters.length);
    let selectedArray = [];
    selectedArray = availableCharacters[randomCheckBoxValue];

    character = selectedArray[Math.floor(Math.random() * selectedArray.length)];

    return character;
}

const generatePassword = (uCaseValue, lCaseValue, numsValue, splCharValue) => {
    let unchecked = 0;
    let checkBoxValues = [uCaseValue, lCaseValue, numsValue, splCharValue];
    for (let checks of checkBoxValues) {
        if(checks == false) {
            unchecked++;
        }
    }

    if (unchecked > 2) {
       message.textContent = "Please select at least two!";
       message.style.color = "#ff0000";
       placeHolder.style.display = "block";
       placeHolder.textContent = "Please try again!"
       yourPassword.style.display = "none";
    }
    else {
        let pswd = "";
        for (let i = 0; i < 20; i++) {
            pswd += randomCharacter(allCharacters, checkBoxValues);
        }
        yourPassword.textContent = pswd;
        yourPassword.style.display = "block";
        placeHolder.style.display = "none";
        copy.style.color = "#eeeeee";
        copy.title = "Copy";
        message.textContent = "Click the copy icon to copy your password.";
        message.style.color = "#555555";
    }
}

const copyPassword = () => {
    let passwordToCopy = document.querySelector("#yourPassword");
    let cb = navigator.clipboard;
    cb.writeText(passwordToCopy.innerText);
    copy.style.color = "#15e638";
    copy.title = "Copied";
}

btn.addEventListener("click", function(){generatePassword(uCase.checked, lCase.checked, nums.checked, splChar.checked)}, false);
copy.addEventListener("click", copyPassword);