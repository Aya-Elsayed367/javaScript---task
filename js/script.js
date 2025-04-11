const wrapper = document.querySelector(".wrapper");
const signupHeader = document.querySelector(".signup header");
const loginHeader = document.querySelector(".login header");

loginHeader.addEventListener("click", () => {
wrapper.classList.add("active");
});

signupHeader.addEventListener("click", () => {
wrapper.classList.remove("active");
});

const signupSubmitButton = document.querySelector("#btnsubmit");
const loginSubmitButton = document.querySelector("#btnlogin");

const fullNameInput = document.querySelector(".fullName");
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");

const emailLoginInput = document.querySelector(".email_login");
const passwordLoginInput = document.querySelector(".password_login");

let userName = null;
let userEmail = null;
let userPassword = null;

const clearFormFields = (formElements) => {
formElements.forEach(element => {
if (element.value) {
element.value = "";
}
});
};

signupSubmitButton.addEventListener("click", (e) => {
e.preventDefault();
if (fullNameInput.value !== "" && emailInput.value !== "" && passwordInput.value !== "") {
alert("Welcome " + fullNameInput.value + " the account has been created.");
userName = fullNameInput.value;
userEmail = emailInput.value;
userPassword = passwordInput.value;
wrapper.classList.add("active"); // Go to login after signup
clearFormFields([fullNameInput, emailInput, passwordInput]);
} else {
alert("Please fill all signup fields.");
}
});

loginSubmitButton.addEventListener("click", (e) => {
e.preventDefault();
if (emailLoginInput.value !== "" && passwordLoginInput.value !== "") {
if (
emailLoginInput.value === userEmail &&
passwordLoginInput.value === userPassword
) {
alert("Welcome Back " + userName);
clearFormFields([emailLoginInput, passwordLoginInput]);
} else {
alert("Incorrect email or password");
clearFormFields([emailLoginInput, passwordLoginInput]);
}
} else {
alert("Please fill all login fields.");
}
});
