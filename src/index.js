import "./style.css";

const email = document.querySelector("#mail");
const errorEmail = document.querySelector("#mail-error");

email.addEventListener("focusout", (event) => {
  if (event.target.validity.patternMismatch) {
    errorEmail.classList.remove("hidden");
    errorEmail.innerText = "Please provide a valid e-mail address.";
  } else if (event.target.validity.valueMissing) {
    errorEmail.classList.remove("hidden");
    errorEmail.innerText = "Please provide an e-mail.";
  } else if (event.target.validity.valid) {
    errorEmail.classList.add("hidden");
  }
});

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
        ? errorZip.classList.add("hidden")
        : (errorZip.classList.remove("hidden"),
          (errorZip.innerText = `Expected zip code pattern for ${obj.country}: ${obj.pattern}`));
    }
  });
});
