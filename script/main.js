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
