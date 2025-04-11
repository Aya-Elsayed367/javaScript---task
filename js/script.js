let btnSubmit = document.querySelector("#btnsubmit");
let btnLogin = document.querySelector("#btnLogin"); //

let wrapper = document.querySelector(".wrapper");
let signupHeader = document.querySelector(".signup header");
let loginHeader = document.querySelector(".login header");

let fullName = document.querySelector(".fullName");
let email = document.querySelector(".email");
let password = document.querySelector(".password");

let email_login = document.querySelector(".email_login"); //
let password_login = document.querySelector(".password_login"); //

var userName = null;
var userEmail = null;
var userPassword = null;

let showLogin = () => {
  wrapper.classList.add("active");
};
let showSignup = () => {
  wrapper.classList.remove("active");
};
loginHeader.addEventListener("click", () => showLogin());
signupHeader.addEventListener("click", () => showSignup());

btnSubmit.addEventListener("click", () => {
  if (fullName.value != "" && email.value != "" && password.value != "") {
    alert("Welcome " + fullName.value + " the account has been created.");
    userName = fullName.value;
    userEmail = email.value;
    userPassword = password.value;
    showLogin();
    fullName.value = "";
    email.value = "";
    password.value = "";
  }
});

btnLogin.addEventListener("click", () => {
  if (email_login.value != "" && password_login.value != "") {
    if (
      email_login.value == userEmail &&
      password_login.value == userPassword
    ) {
      alert("Welcome Back " + userName);
      email_login.value = "";
      password_login.value = "";
    } else {
      alert("Incorrect email or password");
      email_login.value = "";
      password_login.value = "";
    }
  }
});
