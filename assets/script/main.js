const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
const main = document.querySelector(".main");
const sidenav = document.querySelector(".off");

let a = false;

//_______________________________________________________________________________________________________
window.addEventListener("load", () => {
  sidebar.style.transition = "none";
  main.style.transition = "none";

  if (window.innerWidth >= 991) {
    // Assuming "lg" size starts at 992px
    sidebar.style.left = "0";
    main.style.left = "300px";
    main.style.width = "calc(100% - 300px)";
    a = false;
  } else {
    sidebar.style.left = "-300px";
    main.style.left = "0";
    main.style.width = "100%";
  }

  setTimeout(() => {
    sidebar.style.transition = "left 0.3s ease, width 0.3s ease";
    main.style.transition = "left 0.3s ease, width 0.3s ease";
  }, 0); // Delay to ensure that the transition is applied after style changes
});

//________________________________________________________________________________________________________________
sidebarClose.addEventListener("click", () => {
  sidebar.style.transition = "left 0.3s ease, width 0.3s ease";
  main.style.transition = "left 0.3s ease, width 0.3s ease";
  if (a === true) {
    sidebar.style.left = "0";
    main.style.left = "300px";
    main.style.width = "calc(100% - 300px)";
    a = false;
  } else {
    sidebar.style.left = "-300px";
    main.style.left = "0";
    main.style.width = "100%";
    a = true;
  }
});

//________________________________________________________________________________________________________________
function adjustDivSize() {
  let windowWidth = window.innerWidth;

  // Disable transition animation
  sidebar.style.transition = "none";
  main.style.transition = "none";

  if (windowWidth <= 991) {
    sidebar.style.left = "-300px";
    main.style.left = "0";
    main.style.width = "100%";
    main.style.display = "block";
    sidenav.style.display = "block";
    a = true;
  } else {
    sidebar.style.left = "0";
    main.style.left = "300px";
    main.style.width = "calc(100% - 300px)";
    a = false;
  }
  // Re-enable transition animation after style changes
  setTimeout(() => {
    sidebar.style.transition = "left 0.5s ease, width 0.5s ease";
    main.style.transition = "left 0.5s ease, width 0.5s ease";
  }, 0); // Delay to ensure that the transition is applied after style changes
}

//________________________________________________________________________________________________________________
adjustDivSize();
//________________________________________________________________________________________________________________
window.addEventListener("resize", adjustDivSize);

//________________________________________________________________________________________________________________
function updateTime() {
  const clock = document.getElementById("clock");
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = String(hours).padStart(2, "0");
  clock.innerHTML = `${hours}:${minutes}:${seconds} ${period}`;
}
setInterval(updateTime, 1000);
updateTime();

//________________________________________________________________________________________________________________
document.addEventListener("DOMContentLoaded", function () {
  const dateElement = document.getElementById("currentDate");
  const options = { year: "numeric", month: "long", day: "numeric" };
  const today = new Date().toLocaleDateString("en-US", options);
  dateElement.textContent = today;
});

//________________________________________________________________________________________________________________
document.addEventListener("DOMContentLoaded", function () {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();
  const currentDate = today.getDate();

  const monthYear = document.getElementById("monthYear");
  const calendarDays = document.getElementById("calendarDays");
  const prevMonthBtn = document.getElementById("prevMonth");
  const nextMonthBtn = document.getElementById("nextMonth");

  //________________________________________________________________________________________________________________
  function renderCalendar(month, year) {
    calendarDays.innerHTML = "";
    monthYear.textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
      let row = document.createElement("div");
      row.className = "row";

      for (let j = 0; j < 7; j++) {
        let cell = document.createElement("div");
        cell.className = "col";

        if (i === 0 && j < firstDay) {
          cell.classList.add("empty");
          cell.innerHTML = "";
        } else if (date > daysInMonth) {
          cell.classList.add("empty");
          cell.innerHTML = "";
        } else {
          if (
            date === currentDate &&
            month === today.getMonth() &&
            year === today.getFullYear()
          ) {
            cell.classList.add("today");
          }
          cell.innerHTML = date;
          date++;
        }
        row.appendChild(cell);
      }
      calendarDays.appendChild(row);
    }
  }

  //________________________________________________________________________________________________________________
  function nextMonth() {
    if (currentMonth === 11) {
      currentMonth = 0;
      currentYear++;
    } else {
      currentMonth++;
    }
    renderCalendar(currentMonth, currentYear);
  }

  //________________________________________________________________________________________________________________
  function prevMonth() {
    if (currentMonth === 0) {
      currentMonth = 11;
      currentYear--;
    } else {
      currentMonth--;
    }
    renderCalendar(currentMonth, currentYear);
  }

  prevMonthBtn.addEventListener("click", prevMonth);
  nextMonthBtn.addEventListener("click", nextMonth);

  renderCalendar(currentMonth, currentYear);
});

let logOut = document.querySelector(".logoutBtn");
let logOut2 = document.querySelector(".logout1");
let smsidenav = document.querySelector(".smsidenav");
let loader = document.querySelector(".loader");
let header = document.querySelector(".header");
let footer = document.querySelector(".footer");
let footer1 = document.querySelector(".footer1");

logOut.addEventListener("click", () => {
  setTimeout(() => {
    loader.style.display = "block";
    footer.style.opacity = "0";
    footer1.style.opacity = "0";
    header.style.opacity = "0";
    smsidenav.style.display = "none";

    setTimeout(() => {
      window.location.href = "/index.html";
    }, 2000);
  }, 300);
});

/*SIDEBAR BUTTONS*/
const dashBoard = document.querySelector("#dashboard");
const studentProfile = document.querySelector("#studentProfile");
const Grades = document.querySelector("#grades");
const Enrollment = document.querySelector("#enrollment");
const payMent = document.querySelector("#payment");

/*SIDEBNAV BUTTONS*/
const dashboardBtn = document.querySelector("#dashboard1");
const studentProfileBtn = document.querySelector("#studentProfile1");
const gradesBtn = document.querySelector("#grades1");
const enrollmentBtn = document.querySelector("#enrollment1");
const paymentBtn = document.querySelector("#payment1");

// Function to set active state for sidebar buttons
function setActiveButton(activeButton) {
  const buttons = [
    dashboardBtn,
    studentProfileBtn,
    gradesBtn,
    enrollmentBtn,
    paymentBtn,
  ];

  buttons.forEach((button) => {
    if (button === activeButton) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

// Function to handle styling changes for sidebar buttons
//________________________________________________________________________________________________________________
function setActiveButton1(activeButton) {
  const buttons = [dashBoard, studentProfile, Grades, Enrollment, payMent];

  buttons.forEach((button) => {
    if (button === activeButton) {
      button.style.backgroundColor = "#287fc2";
      button.style.color = "#fff";
      sidebar.style.left = "-300px";
      main.style.left = "0";
      main.style.width = "100%";
    } else {
      button.style.backgroundColor = "#1f6599";
      button.style.color = "#ffffffc5";
    }
  });
}

// Function to toggle content based on selected page
//________________________________________________________________________________________________________________
function toggleContent(page) {
  // Hide all content sections
  document.querySelectorAll(".content").forEach((content) => {
    content.style.display = "none";
  });
  // Show the content section for the selected page
  document.getElementById(page + "Content").style.display = "block";
}

// Click event listener for sidebar navigation buttons
//________________________________________________________________________________________________________________
document.querySelectorAll(".navBtn, .navBtn1").forEach((btn) => {
  btn.addEventListener("click", function () {
    // Set active state for sidebar buttons
    setActiveButton(btn);
    const id = btn.id.replace(/[0-9]/g, ""); // Remove numbers from button ID
    const correspondingBtn = document.querySelector(`#${id}`);
    if (correspondingBtn) {
      setActiveButton1(correspondingBtn); // Set active state for corresponding sidebar button
    }
    // Toggle content based on clicked button
    toggleContent(id);
  });
});

// Initial page/content to display
const initialPage = "dashboard"; // or any other initial page
toggleContent(initialPage);
setActiveButton(document.querySelector(`#${initialPage}1`)); // Set active state for initial sidebar button

//FOR STUDENT INFORMATION SCRIPT____________________________________________________________________________________
//START____________________________________________________________________________________________
// Get all buttons inside the collapsible element
const buttons = document.querySelectorAll('#navbarToggleExternalContent button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const collapsible = document.querySelector('#navbarToggleExternalContent');

        const bootstrapCollapse = new bootstrap.Collapse(collapsible, {
            toggle: false
        });
        bootstrapCollapse.hide();
    });
});

//Function to change avatar _____________________________________________________________________
function changeAvatar() {
  document.getElementById("avatarInput").click();
}

//Save Button_________________________________________________________________________________________________
let saveButton = document.querySelector("#saveButton");
let okatBtbn = document.querySelector(".btn");

saveButton.setAttribute("disabled", true);

//for avatar input change_________________________________________________________________________________
document.getElementById("avatarInput").addEventListener("change", function () {
  let file = this.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = function (e) {
      let imgElement = document.querySelector(".img");
      let size = document.querySelector(".img p");
      imgElement.style.backgroundImage = `url('${e.target.result}')`;
      imgElement.style.display = "block";
      size.style.display = "none";
      saveButton.removeAttribute("disabled");
      saveButton.style.transform =  'translate(-50%, -10%)';
      
      document.getElementById("saveButton").style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

//Function for save avatar______________________________________________________________________________________
function saveAvatar() {
  let imgElement1 = document.querySelector(".img1");
  let icon = document.querySelector(".img1 i");
  let imgElement2 = document.querySelector(".img2");
  let icon1 = document.querySelector(".img2 i");
  let imgElement3 = document.querySelector(".img3");
  let icon2 = document.querySelector(".img3 i");


  let imageURL = document.querySelector(".img").style.backgroundImage;

    if (imageURL) {
      imgElement1.style.backgroundImage = imageURL;
      imgElement1.style.display = "block";
      imgElement1.style.border = "2px solid #fff";
      icon.style.display = "none";
      imgElement2.style.backgroundImage = imageURL;
      imgElement2.style.display = "block";
      imgElement2.style.border = "2px solid #fff";
      icon1.style.display = "none";
      imgElement3.style.backgroundImage = imageURL;
      imgElement3.style.display = "block";
      imgElement3.style.border = "2px solid #fff";
      icon2.style.display = "none";
      saveButton.setAttribute("disabled", true);
    } else {
      imgElement1.style.display = "none";
    }
}

//For Student Information content_____________________________________________________________________________________
let userProfile = document.querySelector('.userProfile');
let SecurityAcc = document.querySelector('.SecurityAcc');
let studentAdditionalinformation = document.querySelector('.studentAdditionalinformation');

//For Student Information buttons_____________________________________________________________________________________
let Account = document.querySelector('.Account');
let Security = document.querySelector('.Security');
let additionalInformation = document.querySelector('.addInformation');

//Function for Account Button________________________________________________________________________________
Account.addEventListener('click', () => {
  Account.style.backgroundColor = '#287fc29f';
  Account.style.color = '#fff';
  Security.style.backgroundColor = '#fff';
  Security.style.color = '#1f6599';
  additionalInformation.style.backgroundColor = '#fff';
  additionalInformation.style.color = '#1f6599';

  userProfile.style.display = 'block';
  SecurityAcc.style.display = 'none';
  studentAdditionalinformation.style.display = 'none';
});

//Function for Security Button________________________________________________________________________________
Security.addEventListener('click', () => {
  Security.style.backgroundColor = '#287fc29f';
  Security.style.color = '#fff';
  Account.style.backgroundColor = '#fff';
  Account.style.color = '#1f6599';
  additionalInformation.style.backgroundColor = '#fff';
  additionalInformation.style.color = '#1f6599';

  userProfile.style.display = 'none';
  SecurityAcc.style.display = 'block';
  studentAdditionalinformation.style.display = 'none';
});

//Function for Additional Information Button________________________________________________________________________________
additionalInformation.addEventListener('click', () => {
  additionalInformation.style.backgroundColor = '#287fc29f';
  additionalInformation.style.color = '#fff';
  Security.style.backgroundColor = '#fff';
  Security.style.color = '#1f6599';
  Account.style.backgroundColor = '#fff';
  Account.style.color = '#1f6599';

  userProfile.style.display = 'none';
  SecurityAcc.style.display = 'none';
  studentAdditionalinformation.style.display = 'block';
});
