// navbar

let menu = document.querySelector(".menu");

document.querySelector(".menu-btn").onclick = () => {
  menu.classList.add("active");
};

document.querySelector(".close-menu").onclick = () => {
  menu.classList.remove("active");
};

// validation

const studentForm = document.getElementById("form");
const inputName = document.getElementById("name");
const inputCompany = document.getElementById("company");
const inputEmail = document.getElementById("mail");
const inputTel = document.getElementById("tel");

studentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  ValidateInput();
});

ValidateInput = () => {
  const inputNameValue = inputName.value.trim();
  const inputCompanyValue = inputCompany.value.trim();
  const inputEmailValue = inputEmail.value.trim();
  const inputTelValue = inputTel.value.trim();

  ValidateName(inputNameValue);
  ValidateEmail(inputEmailValue);
  ValidateCompany(inputCompanyValue);
  ValidateTelefon(inputTelValue);
};

function ValidateName(inputNameValue) {
  if (inputNameValue === "") {
    SetError(inputName);
  } else {
    SetSuccess(inputName);
  }
}
function ValidateCompany(inputCompanyValue) {
  if (inputCompanyValue === "") {
    SetError(inputCompany);
  } else {
    SetSuccess(inputCompany);
  }
}
function ValidateEmail(inputEmailValue) {
  if (inputEmailValue === "") {
    SetError(inputEmail);
  } else {
    SetSuccess(inputEmail);
  }
}
function ValidateTelefon(inputTelValue) {
  if (inputTelValue === "") {
    SetError(inputTel);
  } else {
    SetSuccess(inputTel);
  }
}

function SetError(element) {
  const inputControl = element.parentElement;
  const errorClass = inputControl.querySelector(".error-class");
  const successClass = inputControl.querySelector(".success-class");
  successClass.classList.remove("element-visible");
  successClass.classList.add("element-hidden");
  errorClass.classList.add("element-visible");
  errorClass.classList.remove("element-hidden");
  element.classList.add("error-border");
  element.classList.remove("success-border");
}

SetSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorClass = inputControl.querySelector(".error-class");
  const successClass = inputControl.querySelector(".success-class");
  successClass.classList.add("element-visible");
  successClass.classList.remove("element-hidden");
  errorClass.classList.add("element-hidden");
  errorClass.classList.remove("element-visible");
  element.classList.remove("error-border");
  element.classList.add("success-border");
};
