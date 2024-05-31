const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
const main = document.querySelector(".main");

let a = false;

sidebarClose.addEventListener("click", () => {
    if (a === true) {
        sidebar.style.left = "0";
        main.style.left = "20%";
        main.style.width = "80%";
        a = false;
    } else {
        sidebar.style.left = "-20%";
        main.style.left = "0";
        main.style.width = "100%";
        a = true;
    }
});

function adjustDivSize() {
  let windowWidth = window.innerWidth;
  
  if (windowWidth <= 992) {
    sidebar.style.left = "-20%";
    main.style.left = "0";
    main.style.width = "100%";
    main.style.display = "block";
    a = true;
  } 
}

adjustDivSize();

window.addEventListener('resize', adjustDivSize);

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

  document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("currentDate");
    const options = { year: "numeric", month: "long", day: "numeric" };
    const today = new Date().toLocaleDateString("en-US", options);
    dateElement.textContent = today;
  });

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
  
    function nextMonth() {
      if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
      } else {
        currentMonth++;
      }
      renderCalendar(currentMonth, currentYear);
    }
  
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
  
  let logOut = document.querySelector(".logout");
  let loader = document.querySelector(".loader");
  let header = document.querySelector(".header");
  logOut.addEventListener("click", () => {
    loader.style.display = "block";
    header.style.opacity = "0";
  
    setTimeout(() => {
      window.location.href = "/src/index.html"; 
   }, 2000);
  
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const toggleButton = document.getElementById("toggleButton1");
    const mainContent = document.getElementById("main-content");
  
    toggleButton.addEventListener("click", function() {
        if (window.innerWidth >= 768) {
            navbar.classList.toggle("small");
            mainContent.classList.toggle("small");
        }
    });
  });
  
  
  