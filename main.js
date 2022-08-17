// declaring variables
var input = document.querySelector("#input");
let form = document.querySelector("form");
let goBackBtn = document.querySelector(".go-back");
let test = document.querySelector(".test");
let customMassage = document.querySelector(".custom-massage");
let customAlert = document.querySelector(".custom-alert");
// form validation

form.onsubmit = function (e) {
  if (input.value == "") {
    // show custom alert with value => "you must fillout the input"
    document.querySelector(".custom-alert").style.opacity = "1";
    // return false;
    return false;
  } else if (input.value.split("").slice(-4).join("") !== ".com") {
    // show custom alert with value => "you must fillout the input"
    document.querySelector(".custom-alert").style.opacity = "1";
    document.querySelector(".custom-alert p").innerHTML =
      "You Should Add '.com' in the end of your email";
    // return false;
    return false;
  }
};

test.onclick = function () {
  customAlert.style.opacity = 1;
};
function inputFocus() {
  input.focus();
}
window.onload = inputFocus();
window.onclick = inputFocus();
window.addEventListener("keyup", function (e) {
  if (e.key == "f") {
    inputFocus();
  }
  if (e.getModifierState("CapsLock")) {
    customMassage.style.opacity = 1;
    customMassage.innerHTML = "<p>Caps-Lock On</p>";
  } else {
    customMassage.innerHTML = "<p>Caps-Lock Off</p>";
    this.setTimeout(() => {
      customMassage.style.opacity = 0;
    }, 500);
  }
});
// to delete custom alert
goBackBtn.onclick = function () {
  customAlert.style.opacity = 0;
};

// timer script

// declaration
let countDownDate = new Date();
countDownDate = new Date(
  countDownDate.getFullYear() + 1,
  countDownDate.getMonth() - 4,
  01
);

var x = setInterval(() => {
  let now = new Date();
  let diff = countDownDate - now;

  let month = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  let days = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.querySelector(".number-month").innerHTML =
    month < 10 ? `0${month}` : month;
  document.querySelector(".number-days").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".number-hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".number-minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".number-seconds").innerHTML =
  seconds < 10 ? `0${seconds}` : seconds;
}, 1000);
