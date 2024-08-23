const mail = document.getElementById("mail");
const num = document.getElementById("number1");
const pass = document.getElementById("password");
const bottun = document.getElementById("submit");
let valid = 0;
function gmail() {
  const mailValue = mail.value;
  if (mailValue.includes("@") == true) {
    // alert("mail boljishd");
    valid++;
  } else {
    alert("mail @ bhgu bn");
  }
}

const letter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numb = "0123456789";
let numbe = 0;
function number() {
  const checkPhoneNumberValue = num.value;
  for (let i = 0; i < checkPhoneNumberValue.length; i++) {
    if (letter.includes(checkPhoneNumberValue[i]) === true) {
      alert("number useg ashiglaad suga");
      numbe++;
      break;
    }
  }
  if (numbe == 0 && checkPhoneNumberValue.length == 8) {
    // alert("number boljishd");
    valid++;
  } else {
    alert("suga cin dugaara meddeggun bnashde");
  }
}

function isValidPassword() {
  const passwordValue = pass.value;
  let count = 0;
  if (passwordValue.length >= 8) {
    count++;
  }

  for (let k = 0; k < passwordValue.length; k++) {
    if (letter.includes(passwordValue[k])) {
      count++;
      break;
    }
  }
  for (let k = 0; k < passwordValue.length; k++) {
    if (numb.includes(passwordValue[k])) {
      count++;
      break;
    }
  }

  if (count === 3) {
    // alert("pass boljishd");
    valid++;
  } else {
    alert("pass bolkushu");
  }
}

function work() {
  gmail();
  number();
  isValidPassword();
  if (valid == 3) {
    window.location.href = "list.html";
  }
}
console.log(valid);
bottun.onclick = work;
