import "./styles.css";
const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number-button");
const output = document.querySelector("#output");

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    output.innerText = "your birthday is lucky 🎊🎊";
    console.log("your birthday is lucky");
  } else {
    output.innerText = "your birthday is not lucky 😬";
    console.log("your birthday is not lucky 😬");
  }
}

function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  compareValues(sum, luckyNumber.value);
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;

  for (let index = 0; index < dob.length; index++) {
    // sum = sum + dob.charAt(index);
    sum = sum + parseInt(dob.charAt(index), 10);
    // sum = sum + +dob.charAt(index)
  }
  // console.log("without parseInt sum is: ", sum); 020210903
  // console.log("with parseInt sum is: ", sum); 17
  return sum;
}

checkNumberButton.addEventListener("click", checkBirthDateIsLucky);
