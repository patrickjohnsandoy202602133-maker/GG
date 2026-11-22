
let lastScrollTop = 0;
const header = document.querySelector("header");
const timeText = document.querySelector(".time");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

// Philippines Time (GMT+8)
const now = new Date();
const philippinesTime = now.toLocaleString("en-US", {
  timeZone: "Asia/Manila"
});

const [date, time] = philippinesTime.split(", ");
timeText.textContent = `${time} GMT+8`;

// Current Year
const yearText = document.getElementById("year");
const year = new Date().getFullYear();

yearText.textContent = year;
