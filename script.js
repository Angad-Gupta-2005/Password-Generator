// rendering all inputs
const passInput = document.getElementById("pass-input");
const length = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
/*
console.log(passInput);
console.log(length);
console.log(uppercase);
console.log(lowercase);
console.log(numbers);
console.log(symbols);
*/
//rendering all buttons

const copy = document.getElementById("copy");
const generate = document.getElementById("generate");
/*
console.log(copy);
console.log(generate);
*/

const uppercasestr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercasestr = "abcdefghijklmnopqrstuvwxyz";
const numberstr = "0123456789";
const symbolstr = "!@#$%^&*()_+";

//adding eventListener to generate password
let password;
generate.addEventListener("click", () => {
  let str = "";
  if (uppercase.checked) {
    str += uppercasestr;
  }
  if (lowercase.checked) {
    str += lowercasestr;
  }
  if (numbers.checked) {
    str += numberstr;
  }
  if (symbols.checked) {
    str += symbolstr;
  }
  //   console.log(str);
  //main logic
  password = "";
  for (let i = 0; i < length.value; i++) {
    // console.log(str.length);
    let index = Math.floor(Math.random() * str.length);
    // console.log(index);
    // console.log(str[index]);
    password += str[index];
    // console.log(password);
    passInput.value = password;
  }
});

copy.addEventListener("click", () => {
  if (passInput.value === "") {
    alert("Please generate password first");
  } else {
    const newElement = document.createElement("textarea");
    newElement.value = passInput.value;
    document.body.appendChild(newElement);
    newElement.select();
    document.execCommand("copy");
    alert("Password Copied to Clipboard");
    newElement.remove();
  }
});
