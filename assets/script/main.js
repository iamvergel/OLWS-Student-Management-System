/*_____ FOR SIDEBAR ____________________________________________________________________________________________________*/
/*_____ START __________________________________________________________________________________________________________*/
//VARIABLE FOR SIDEBAR
let sidebar = document.querySelector(".sidebar");
let sidebarClose = document.querySelector("#sidebar-close");
let main = document.querySelector(".main");
let sidenav = document.querySelector(".off");

//VARIABLE FOR SIDEBAR CLOSE TRUE / FALSE
let a = false;

/*_______________________________________________________________________________*/
window.addEventListener("load", () => {
  sidebar.style.transition = "none";
  main.style.transition = "none";

  if (window.innerWidth >= 991) {
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
  }, 0);
});

/*_______________________________________________________________________________*/
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

/*_______________________________________________________________________________*/
function adjustDivSize() {
  let windowWidth = window.innerWidth;

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

  setTimeout(() => {
    sidebar.style.transition = "left 0.5s ease, width 0.5s ease";
    main.style.transition = "left 0.5s ease, width 0.5s ease";
  }, 0);
}

/*_______________________________________________________________________________*/
adjustDivSize();

/*_______________________________________________________________________________*/
window.addEventListener("resize", adjustDivSize);
/*____ END ______________________________________________________________________________________________________________*/

/*_____ FOR CLOCK _______________________________________________________________________________________________________*/
/*_____ START ___________________________________________________________________________________________________________*/
/*_______________________________________________________________________________*/
function updateTime() {
  //VARIABLE FOR CLOCK
  let clock = document.getElementById("clock");
  let now = new Date();
  let hours = now.getHours();
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");
  let period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
  hours = String(hours).padStart(2, "0");
  clock.innerHTML = `${hours}:${minutes}:${seconds} ${period}`;
}
/*_______________________________________________________________________________*/
setInterval(updateTime, 1000);
/*_______________________________________________________________________________*/
updateTime();
/*____ END ______________________________________________________________________________________________________________*/

/*_____ FOR DATE WELCOME ________________________________________________________________________________________________*/
/*_____ START ___________________________________________________________________________________________________________*/
//VARIAVLE FOR CURENT DATE WELCOME
const dateElement = document.getElementById("currentDate");

/*_______________________________________________________________________________*/
document.addEventListener("DOMContentLoaded", function () {
  //VARIABLE FOR DATE WELCOME
  const options = { year: "numeric", month: "long", day: "numeric" };
  const today = new Date().toLocaleDateString("en-US", options);

  dateElement.textContent = today;
});
/*____ END ______________________________________________________________________________________________________________*/

/*_____ FOR CALENDAR ____________________________________________________________________________________________________*/
/*_____ START ___________________________________________________________________________________________________________*/
//VARIABLE FOR MONTHS
let monthNames = [
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

//VARIABLE FOR CURRENT DATE
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let currentDate = today.getDate();

//VARIABLE FOR HEADER OF CALENDAR
let monthYear = document.getElementById("monthYear");
let calendarDays = document.getElementById("calendarDays");
let prevMonthBtn = document.getElementById("prevMonth");
let nextMonthBtn = document.getElementById("nextMonth");

/*_______________________________________________________________________________*/
document.addEventListener("DOMContentLoaded", function () {
  /*_______________________________________________________________________________*/
  function renderCalendar(month, year) {
    calendarDays.innerHTML = "";
    monthYear.textContent = `${monthNames[month]} ${year}`;

    //VARIABLE FOR DAYS IN A MONTH
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

  /*_______________________________________________________________________________*/
  nextMonthBtn.addEventListener("click", function () {
    if (currentMonth === 11) {
      currentMonth = 0;
      currentYear++;
    } else {
      currentMonth++;
    }
    renderCalendar(currentMonth, currentYear);
  });

  /*_______________________________________________________________________________*/
  prevMonthBtn.addEventListener("click", function () {
    if (currentMonth === 0) {
      currentMonth = 11;
      currentYear--;
    } else {
      currentMonth--;
    }
    renderCalendar(currentMonth, currentYear);
  });

  renderCalendar(currentMonth, currentYear);
});
/*____ END ______________________________________________________________________________________________________________*/

/*_____ FOR MAIN CONTENT SIDEBAR BUTTON__________________________________________________________________________________*/
/*_____ START ___________________________________________________________________________________________________________*/
//VARIABLE FOR BUTTON LG, XL, SIDEBAR BUTTON
const dashBoard = document.querySelector("#dashboard");
const studentProfile = document.querySelector("#studentProfile");
const Grades = document.querySelector("#grades");
const Enrollment = document.querySelector("#enrollment");
const payMent = document.querySelector("#payment");

//VARIABLE FOR BUTTON SM, MD OFFCANVAS SIDEBAR BUTTON
const dashboardBtn = document.querySelector("#dashboard1");
const studentProfileBtn = document.querySelector("#studentProfile1");
const gradesBtn = document.querySelector("#grades1");
const enrollmentBtn = document.querySelector("#enrollment1");
const paymentBtn = document.querySelector("#payment1");

/*_______________________________________________________________________________*/
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

/*_______________________________________________________________________________*/
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

/*_______________________________________________________________________________*/
function toggleContent(page) {
  // Hide all content sections
  document.querySelectorAll(".content").forEach((content) => {
    content.style.display = "none";
  });
  // Show the content section for the selected page
  document.getElementById(page + "Content").style.display = "block";
}

/*_______________________________________________________________________________*/
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

/*_______________________________________________________________________________*/
const initialPage = "dashboard";
toggleContent(initialPage);
setActiveButton(document.querySelector(`#${initialPage}1`));
/*____ END ______________________________________________________________________________________________________________*/

/*_____ FOR STUDENT INFORMATIOMN CONTENT ________________________________________________________________________________*/
/*_____ START ___________________________________________________________________________________________________________*/
//VARIABLE FOR STUDENT INFORMATION NAVIGATION
const siButton = document.querySelectorAll(
  "#navbarToggleExternalContent button"
);

/*_______________________________________________________________________________*/
siButton.forEach((button) => {
  button.addEventListener("click", () => {
    const collapsible = document.querySelector("#navbarToggleExternalContent");

    const bootstrapCollapse = new bootstrap.Collapse(collapsible, {
      toggle: false,
    });
    bootstrapCollapse.hide();
  });
});

//VARIABLE FOR CHANGE AVATAR
let changeAvatar = document.querySelector(".changeAvatar");
let avatarInput = document.querySelector("#avatarInput");

/*_______________________________________________________________________________*/
changeAvatar.addEventListener("click", () => {
  document.getElementById("avatarInput").click();
});

//VARIABLE FOR SAVE AVATAR
let saveButton = document.querySelector("#saveButton");
saveButton.setAttribute("disabled", true);

/*_______________________________________________________________________________*/
avatarInput.addEventListener("change", function () {
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
      saveButton.style.transform = "translate(-50%, -10%)";

      document.getElementById("saveButton").style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

//VARIABLE FOR SAVE AVATAR ALL
let saveAvatar = document.querySelector(".saveButton");

/*_______________________________________________________________________________*/
saveAvatar.addEventListener("click", () => {
  //VARIABLE CHANGE ALL AVATAR
  let imgElement1 = document.querySelector(".img1");
  let icon = document.querySelector(".img1 i");
  let imgElement2 = document.querySelector(".img2");
  let icon1 = document.querySelector(".img2 i");
  let imgElement3 = document.querySelector(".img3");
  let icon2 = document.querySelector(".img3 i");

  //VARIABLE IMAGE URL
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
});
/*____ END ______________________________________________________________________________________________________________*/

/*_____ FOR DATE LOGOUT _________________________________________________________________________________________________*/
/*_____ START ___________________________________________________________________________________________________________*/
let userProfile = document.querySelector(".userProfile");
let SecurityAcc = document.querySelector(".SecurityAcc");
let studentAdditionalinformation = document.querySelector(
  ".studentAdditionalinformation"
);

let Account = document.querySelector(".Account");
let Security = document.querySelector(".Security");
let additionalInformation = document.querySelector(".addInformation");

Account.addEventListener("click", () => {
  Account.style.backgroundColor = "#287fc29f";
  Account.style.color = "#fff";
  Security.style.backgroundColor = "#fff";
  Security.style.color = "#1f6599";
  additionalInformation.style.backgroundColor = "#fff";
  additionalInformation.style.color = "#1f6599";

  userProfile.style.display = "block";
  SecurityAcc.style.display = "none";
  studentAdditionalinformation.style.display = "none";
});

Security.addEventListener("click", () => {
  Security.style.backgroundColor = "#287fc29f";
  Security.style.color = "#fff";
  Account.style.backgroundColor = "#fff";
  Account.style.color = "#1f6599";
  additionalInformation.style.backgroundColor = "#fff";
  additionalInformation.style.color = "#1f6599";

  userProfile.style.display = "none";
  SecurityAcc.style.display = "block";
  studentAdditionalinformation.style.display = "none";
});

additionalInformation.addEventListener("click", () => {
  additionalInformation.style.backgroundColor = "#287fc29f";
  additionalInformation.style.color = "#fff";
  Security.style.backgroundColor = "#fff";
  Security.style.color = "#1f6599";
  Account.style.backgroundColor = "#fff";
  Account.style.color = "#1f6599";

  userProfile.style.display = "none";
  SecurityAcc.style.display = "none";
  studentAdditionalinformation.style.display = "block";
});

/*_____ FOR DATE LOGOUT _________________________________________________________________________________________________*/
/*_____ START ___________________________________________________________________________________________________________*/
//VARIABLE FOR LOG OUT
let logOut = document.querySelector(".logoutBtn");
let smsidenav = document.querySelector(".smsidenav");
let loader = document.querySelector(".loader");
let header = document.querySelector(".header");
let footer = document.querySelector(".footer");
let footer1 = document.querySelector(".footer1");

/*_______________________________________________________________________________*/
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
/*____ END ______________________________________________________________________________________________________________*/
