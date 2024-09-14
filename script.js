const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const passwordOutput = document.getElementById("passwordOutput");
const generateBtn = document.getElementById("generateBtn");
const copybtn = document.getElementById('copytoclipboard');

// Character sets
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{}[]<>?/.,:;";

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener("click", () => {
    const length = lengthSlider.value;
    const includeUppercase = uppercaseCheckbox.checked;
    const includeLowercase = lowercaseCheckbox.checked;
    const includeNumbers = numbersCheckbox.checked;
    const includeSymbols = symbolsCheckbox.checked;

    const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    passwordOutput.textContent = password;
});

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    let charSet = "";

    if (includeUppercase) {
        charSet += uppercase;
    }
    if (includeLowercase) {
        charSet += lowercase;
    }
    if (includeNumbers) {
        charSet += numbers;
    }
    if (includeSymbols) {
        charSet += symbols;
    }

    if (charSet === "") {
        return "Please select at least one character type.";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    return password;
}

copybtn.addEventListener('click', () => {
    const pass = document.getElementById('passwordOutput').textContent;

    if (!pass) {
        alert("please generate password first");
        return;
    }
    
    copyFunction(pass)
    
})

function copyFunction(input) {

    navigator.clipboard.writeText(input)
    .then(()=> alert("password copied to clipboard"))
    
}
