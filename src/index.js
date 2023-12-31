import "./style.css";

// Constraint validation for the e-mail field
const email = document.querySelector("#mail");
const errorEmail = document.querySelector("#mail-error");

email.addEventListener("focusout", (event) => {
  if (event.target.validity.patternMismatch) {
    errorEmail.classList.remove("display-none");
    errorEmail.innerText = "Please provide a valid e-mail address.";
  } else if (event.target.validity.valueMissing) {
    errorEmail.classList.remove("display-none");
    errorEmail.innerText = "Please provide an e-mail.";
  } else if (event.target.validity.valid) {
    errorEmail.classList.add("display-none");
  }
});

// Constraint validation for the zip number
const zipValidationArr = [
  {
    country: "Turkey",
    regexp: "^[0-9]{2}[0-9]{3}$",
    pattern:
      "Five digits, starting with the two-digit license plate code followed by three digits.",
  },
  {
    country: "Germany",
    regexp: "^\\d{5}$",
    pattern: "Five-digit number.",
  },
  {
    country: "Bulgaria",
    regexp: "^\\d{4}$",
    pattern: "Four digit number.",
  },
  {
    country: "Greece",
    regexp: "^\\d{5}$",
    pattern: "Five-digit number.",
  },
];

const zip = document.querySelector("#zip");
const errorZip = document.querySelector("#zip-error");
const country = document.querySelector("#country");

zip.addEventListener("focusout", (event) => {
  zipValidationArr.forEach((obj) => {
    if (country.value === obj.country) {
      let regex = new RegExp(obj.regexp);
      regex.test(event.target.value)
        ? errorZip.classList.add("display-none")
        : (errorZip.classList.remove("display-none"),
          (errorZip.innerText = `Expected zip code pattern for ${obj.country}: ${obj.pattern}`));
    }
  });
});

//Constraint validation for password field
const password = document.querySelector("#pass");
const errorPassword = document.querySelector("#password-error");
password.addEventListener("focus", handlePassword);
password.addEventListener("focusout", handlePassword);

function handlePassword(event) {
  if (
    event.target.validity.patternMismatch ||
    event.target.validity.valueMissing
  ) {
    errorPassword.classList.remove("display-none");
    errorPassword.innerText =
      "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.";
  } else {
    errorPassword.classList.add("display-none");
  }
}

//Constraint validation for password confirmation field
const confirmPass = document.querySelector("#confirm-pass");
const errorConfirm = document.querySelector("#confirm-error");
confirmPass.addEventListener("focus", handleConfirm);
confirmPass.addEventListener("focusout", handleConfirm);

function handleConfirm(event) {
  if (event.target.value !== password.value) {
    errorConfirm.classList.remove("display-none");
    errorConfirm.innerText = "Passwords do not match.";
  } else {
    errorConfirm.classList.add("display-none");
  }
}

// Handle "confirm" button click
const form = document.querySelector("form");
const informDiv = document.querySelector("#inform");
const confirmBtn = document.querySelector("#confirmBtn");
confirmBtn.addEventListener("click", confirmClicked);

function confirmClicked(event) {
  event.preventDefault();
  if (form.checkValidity()) {
    informDiv.classList.add("visible");
    informDiv.innerText = "Submission successful.";
  } else if (!form.checkValidity()) {
    informDiv.classList.add("visible");
    informDiv.innerText = "Please fill out all of the fields correctly.";
  }
}
