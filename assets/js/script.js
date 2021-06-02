// TODO
// 1. Create 3 arrays :UpperCase, LowerCase, Special Characters
// 2. create an array containing all the above arrays
// 3. Generate two random numbers:
// 3-1. for the second array to get the array from 2
// 3-2. for the value from the array
// 4. If all boxes are checked then run a for loop,
// to generate to get one of the 3 arrays randomly
// then get the value randomly from that array
// 5. If some of the boxes are checked then
// go through the mase as 4 but if unchecked number comes in
// then ignore that and keep on going. Probably a switch statement


const upperCase = ["A", "B", "C", "D", "E" , "F" , "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialCharacters = [" ", "!", "'", '"', "(", ")", "*", "+", ",", "-", "_", ".", "/", ":", ";", "<", ">", "=", "?", "[", "]", "\\", "^", "`", "~", "{", "}"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const allCharacters = [upperCase, lowerCase, specialCharacters, numbers];

const btn = document.querySelector("#btn");
const copy = document.querySelector("#copy");
const placeHolder = document.querySelector("#placeHolder");
const yourPassword = document.querySelector("#yourPassword");
const message = document.querySelector("#msg");
const uCase = document.querySelector("#upperCase").value;
const lCase = document.querySelector("#lowerCase").value;
const nums = document.querySelector("#numbers").value;
const splChar = document.querySelector("#specialCharacter").value;

const checkBoxValues = [uCase.checked, lCase.checked, nums.checked, splChar.checked];


const randomCharacter = (allCharacters, checkBoxValues) => {
    let character = ""
    let randomCheckBoxValue = Math.floor(Math.random() * checkBoxValues.length);
    let availableCharacters = [];
    for (let i = 0; i < checkBoxValues.length; i++) {
        if (checkBoxValues[i] != false) {
            availableCharacters.push(allCharacters[i]);
        }
    }
    let selectedArray = allCharacters[randomCheckBoxValue];
    character = selectedArray[Math.floor(Math.random() * selectedArray.length)];
    return character;
    
    // if (checkBoxValues[randomCheckBoxValue] == false) {
    //     randomCharacter(allCharacters, checkBoxValues);
    // }
    // else {
    //     let selectedArray = allCharacters[randomCheckBoxValue];
    //     character = selectedArray[Math.floor(Math.random() * selectedArray.length)];
    //     return character;
    // }
}

const generatePassword = (checkBoxValues) => {
    let unchecked = 0;
    for (let checks of checkBoxValues) {
        if(checks == false) {
            unchecked++;
        }
    }

    if (unchecked > 2) {
       message.textContent = "Plese select at least two!";
       message.style.color = "#ff0000";
    }
    else {
        let pswd = "";
        for (let i = 0; i < 20; i++) {
            pswd += randomCharacter(allCharacters, checkBoxValues);
        }
        yourPassword.textContent = pswd;
        placeHolder.style.display = "none";
        copy.style.color = "#eeeeee";
        copy.title = "Copy";
    }
}

const copyPassword = () => {
    let passwordToCopy = document.querySelector("#yourPassword");
    let cb = navigator.clipboard;
    cb.writeText(passwordToCopy.innerText);
    copy.style.color = "#15e638";
    copy.title = "Copied";
}

btn.addEventListener("click", function(){generatePassword(checkBoxValues)}, false);
copy.addEventListener("click", copyPassword);