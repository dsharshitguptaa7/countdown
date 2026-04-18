// ⭐ Create stars
const starsContainer = document.querySelector(".stars");

for (let i = 0; i < 100; i++) {
  let star = document.createElement("span");
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDuration = (Math.random() * 5 + 5) + "s";
  starsContainer.appendChild(star);
}

// ⏳ Countdown
const targetDate = new Date("May 15, 2026 00:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const gap = targetDate - now;

  if (gap <= 0) {
    clearInterval(timer);

    document.getElementById("timer").innerText = "It's Time ❤️";

    const btn = document.getElementById("surpriseBtn");
    btn.classList.add("show");

    return;
  }

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((gap % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

}, 1000);

// 🔗 Redirect
function goToMain() {
  window.location.href = "https://your-main-site-link.com";
}