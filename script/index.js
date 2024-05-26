let userName = document.querySelector("#username");
let passWord = document.querySelector("#password");

let section = document.querySelector("section");
let loader = document.querySelector(".loader");

let alertPassword = document.querySelector(".alert");

let userAccount = [
  { user: "2021-0448", pass: "Macayan" },
  { user: "2021-0605", pass: "Javier" },
  { user: "2021-0604", pass: "Kiskisan" },
  { user: "2021-0924", pass: "Kadusale" },
  { user: "2021-1126", pass: "Hermosa" },
  { user: "2021-1680", pass: "Gonzales" },
  { user: "Sample", pass: "Sample" },
  { user: "User", pass: "Pass"}
];

let logIn = document.querySelector(".login");

logIn.addEventListener("click", () => {
  for (let i = 0; i < userAccount.length; i++) {
    if (
      userName.value === userAccount[i].user &&
      passWord.value === userAccount[i].pass
    ) {
      if (userName.value === "2021-0448") {
        section.style.display = "none";
        loader.style.display = "block";

        setTimeout(() => {
          window.location.href = "/src/MacayanVergel.html";
        }, 2000);
      } else if (userName.value === "2021-0605") {
        section.style.display = "none";
        loader.style.display = "block";

        setTimeout(() => {
          window.location.href = "/src/JavierMichael.html";
        }, 2000);
      } else if (userName.value === "2021-0604") {
        section.style.display = "none";
        loader.style.display = "block";

        setTimeout(() => {
          window.location.href = "/src/KiskisanAnnabelle.html";
        }, 2000);
      } else if (userName.value === "2021-0924") {
        section.style.display = "none";
        loader.style.display = "block";

        setTimeout(() => {
          window.location.href = "/src/KadusaleJenalyn.html";
        }, 2000);
      } else if (userName.value === "2021-1126") {
        section.style.display = "none";
        loader.style.display = "block";

        setTimeout(() => {
          window.location.href = "/src/HermosaGabryelle.html";
        }, 2000);
      } else if (userName.value === "2021-1680") {
        section.style.display = "none";
        loader.style.display = "block";

        setTimeout(() => {
          window.location.href = "/src/GonzalesMarvin.html";
        }, 2000);
      } 
      else if (userName.value === "Sample") {
        section.style.display = "none";
        loader.style.display = "block";

        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 2000);

      alertPassword.style.opacity = "0";
    } else if (userName.value === "User") {
        section.style.display = "none";
        loader.style.display = "block";

        setTimeout(() => {
          window.location.href = "https://youtu.be/7gw9gQ1CXrs?si=xeZf8Ha0iJSKtHyy";
        }, 2000);
      } 

      alertPassword.style.opacity = "0";
    } else if (userName.value === "" && passWord.value === "") {
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
      userName.style.border = "1px solid #FF0000";
      passWord.style.border = "1px solid #FF0000";

      alertPassword.style.opacity = "1";
      alertPassword.innerHTML = "*This Account is not registered";
    }
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

document.addEventListener('DOMContentLoaded', function () {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const rememberMeCheckbox = document.getElementById('form2Example3');
  const toggleIcon = document.getElementById('togglePasswordIcon');

  // Load saved username and password from local storage
  const savedUsername = localStorage.getItem('rememberedUsername');
  const savedPassword = localStorage.getItem('rememberedPassword');
  if (savedUsername && savedPassword) {
      usernameInput.value = savedUsername;
      passwordInput.value = savedPassword;
      rememberMeCheckbox.checked = true;
  }

  // Show/Hide Password functionality
  function togglePasswordVisibility() {
      if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          toggleIcon.classList.remove('bi-eye');
          toggleIcon.classList.add('bi-eye-slash');
      } else {
          passwordInput.type = 'password';
          toggleIcon.classList.remove('bi-eye-slash');
          toggleIcon.classList.add('bi-eye');
      }
  }

  document.querySelector('.password-toggle').addEventListener('click', togglePasswordVisibility);

  // Remember me functionality
  document.querySelector('.login').addEventListener('click', function (event) {
      event.preventDefault(); // Prevent actual form submission for demonstration

      if (rememberMeCheckbox.checked) {
          // Save username and password to local storage
          localStorage.setItem('rememberedUsername', usernameInput.value);
          localStorage.setItem('rememberedPassword', passwordInput.value);
      } else {
          // Remove username and password from local storage
          localStorage.removeItem('rememberedUsername');
          localStorage.removeItem('rememberedPassword');
      }
  });
});
