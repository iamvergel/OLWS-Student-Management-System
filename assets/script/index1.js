let userName = document.querySelector("#username");
let passWord = document.querySelector("#password");

let section = document.querySelector(".section");
let loader = document.querySelector(".loader");

let alertPassword = document.querySelector(".alert");

let logIn = document.querySelector(".login");
logIn.addEventListener("click", () => {
    if (userName.value === "" && passWord.value === "") {
        userName.style.border = "1px solid #FF0000";
        passWord.style.border = "1px solid #FF0000";

        alertPassword.style.opacity = "1";
        alertPassword.innerHTML = "*Input Username and Password";
    } else if (userName.value === "") {
        userName.style.border = "1px solid #FF0000";

        alertPassword.style.opacity = "1";
        alertPassword.innerHTML = "*Input Username";
    } else if (passWord.value === "") {
        passWord.style.border = "1px solid #FF0000";

        alertPassword.style.opacity = "1";
        alertPassword.innerHTML = "*Input Password";
    } else {
    }
});

userName.addEventListener("click", () => {
  userName.style.border = "1px solid #193867";
  passWord.style.border = "1px solid #193867";
  alertPassword.style.opacity = "0";
});

passWord.addEventListener("click", () => {
  userName.style.border = "1px solid #193867";
  passWord.style.border = "1px solid #193867";
  alertPassword.style.opacity = "0";
});

document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById('password');
    const togglePasswordIcon = document.getElementById('togglePasswordIcon');

    togglePasswordIcon.addEventListener('click', function() {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);

        // Toggle eye icon
        togglePasswordIcon.classList.toggle('bi-eye');
        togglePasswordIcon.classList.toggle('bi-eye-slash');
    });
});

// JavaScript code for remembering user login
document.addEventListener('DOMContentLoaded', function() {
    const rememberMeCheckbox = document.getElementById('form2Example3');
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');

    // Check if rememberMeCheckbox is checked
    if (localStorage.getItem('remember') === 'true') {
        rememberMeCheckbox.checked = true;
        usernameField.value = localStorage.getItem('username');
        passwordField.value = localStorage.getItem('password');
    }

    // Listen for changes in the checkbox
    rememberMeCheckbox.addEventListener('change', function() {
        if (this.checked) {
            localStorage.setItem('remember', 'true');
            localStorage.setItem('username', usernameField.value);
            localStorage.setItem('password', passwordField.value);
        } else {
            localStorage.removeItem('remember');
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }
    });
});