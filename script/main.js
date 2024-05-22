document.addEventListener("click", function (event) {
  var offcanvasNavbar = document.getElementById("offcanvasNavbar");
  var button = document.querySelector('[data-bs-target="#offcanvasNavbar"]');
  var isClickInside =
    offcanvasNavbar.contains(event.target) || button.contains(event.target);
  if (!isClickInside && offcanvasNavbar.classList.contains("show")) {
    var offcanvas = new bootstrap.Offcanvas(offcanvasNavbar);
    offcanvas.hide();
  }
});

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
    window.location.href = "index.html"; 
}, 2000);

});
