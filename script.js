const usernameInput = document.querySelector(".usernameInput");
const usernamespan = document.querySelector(".usernamespan");
const usernamespan2 = document.createElement("span");
document.querySelector(".input_container_1").appendChild(usernamespan2);
let usernameSwitcher = false;

const emailInput = document.querySelector(".emailInput");
const emailspan = document.querySelector(".emailspan");
const emailspan2 = document.createElement("span");
document.querySelector(".input_container_2").appendChild(emailspan2);
let emailSwitcher = false;

const passwordInput = document.querySelector(".passwordInput");
const passwordspan = document.querySelector(".passwordspan");
const passwordspan2 = document.createElement("span");
document.querySelector(".input_container_3").appendChild(passwordspan2);
let passwordSwitcher = false;

const confirmpasswordInput = document.querySelector(".confirmpasswordInput");
const confirmspan = document.querySelector(".confirmspan");
const confirmpasswordspan2 = document.createElement("span");
document.querySelector(".input_container_4").appendChild(confirmpasswordspan2);
let confirmpasswordSwitcher = false;

const SignUpClass = document.querySelector(".SignUpClass");

function ButtonFunc(event) {
  // Username Start
  event.preventDefault();
  if (usernameInput.value.length < 4) {
    usernamespan.innerHTML = "UserName Less Than 4";
    usernamespan.style.color = "red";
    usernameInput.style.border = "2px red solid";
    usernameSwitcher = false;
  }
  // *
  else if (usernameInput.value.includes(" ")) {
    usernamespan2.innerHTML = "But Remove space";
    usernamespan2.style.color = "red";
    usernameInput.style.border = "2px red solid";
    usernameSwitcher = false;
  }
  // *
  else {
    usernamespan.innerHTML = "Good Length";
    usernamespan.style.color = "green";
    usernamespan2.innerHTML = "";
    usernameInput.style.border = "2px green solid";
    usernameSwitcher = true;
  }
  // Username End

  // mail Start
  if (emailInput.value.includes("@") && emailInput.value.includes(".com")) {
    emailInput.style.border = "2px green solid";
    emailspan2.innerHTML = "";
    emailSwitcher = true;
  } else {
    emailInput.style.border = "2px red solid";
    emailspan2.innerHTML = "@gmail.com";
    emailSwitcher = false;
  }
  // mail End

  // password Start
  if (passwordInput.value.length > 6 && passwordInput.value.length < 8) {
    passwordspan2.innerHTML = "medium";
    passwordspan2.style.color = "orange";
    passwordInput.style.border = "2px orange solid";
    passwordSwitcher = false;
  }

  if (passwordInput.value.length > 8) {
    passwordspan2.innerHTML = "good";
    passwordspan2.style.color = "green";
    passwordInput.style.border = "2px green solid";
    passwordSwitcher = true;
  }

  if (passwordInput.value.length <= 6) {
    passwordspan2.innerHTML = "easy";
    passwordspan2.style.color = "red";
    passwordInput.style.border = "2px red solid";
    passwordSwitcher = false;
  }
  // password End

  // Repeat password Start
  if (
    passwordInput.value == confirmpasswordInput.value &&
    passwordInput.value !== ""
  ) {
    confirmpasswordspan2.innerHTML = "Password matched";
    confirmpasswordspan2.style.color = "green";
    confirmpasswordInput.style.border = "2px green solid";
    confirmpasswordSwitcher = true;
  } else {
    confirmpasswordspan2.innerHTML = "Password not match";
    confirmpasswordspan2.style.color = "red";
    confirmpasswordInput.style.border = "2px red solid";
    confirmpasswordSwitcher = false;
  }
  // Repeat password end
  // Validation start
  if (
    usernameSwitcher === true &&
    emailSwitcher === true &&
    passwordSwitcher === true &&
    confirmpasswordSwitcher === true
  ) {
    window.location.href = "/InformationSuccess/information_Success.html";
  } else {
    // alert("Complete enter information");
  }
  // Validation end
}

SignUpClass.addEventListener("click", ButtonFunc);
