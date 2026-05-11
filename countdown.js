// 🎊 Birthday Facts about Manali
const birthdayFacts = [
  "🌟 Manali is as unique as a butterfly in a garden!",
  "💫 With you around, every day becomes special!",
  "🎨 Your creativity makes the world more colorful!",
  "✨ You bring joy wherever you go!",
  "🌸 Your kindness is your superpower!",
  "💖 You deserve all the happiness in the world!",
  "🎭 Your smile is contagious and beautiful!",
  "🌈 You are one in 8 billion - truly special!"
];

let factIndex = 0;

function updateFact() {
  const factText = document.getElementById("factText");
  factText.innerText = birthdayFacts[factIndex];
  factIndex = (factIndex + 1) % birthdayFacts.length;
}

setInterval(updateFact, 8000);
updateFact();

// 💓 Generate floating hearts
function createFloatingHearts() {
  const heartsContainer = document.getElementById("hearts");
  const heartEmojis = ["💖", "💕", "💗", "💝", "✨", "🌟"];
  
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDuration = (Math.random() * 4 + 5) + "s";
  heart.style.animationDelay = Math.random() * 0.5 + "s";
  
  heartsContainer.appendChild(heart);
  
  setTimeout(() => heart.remove(), 10000);
}

setInterval(createFloatingHearts, 1000);

// ⭐ Create stars
const starsContainer = document.querySelector(".stars");

for (let i = 0; i < 100; i++) {
  let star = document.createElement("span");
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDuration = (Math.random() * 5 + 5) + "s";
  starsContainer.appendChild(star);
}

// 🎊 Motivational messages
const motivationalMessages = [
  "Get ready for something special! ✨",
  "The countdown has begun! ⏳",
  "Every moment brings us closer! 💫",
  "Can you feel the excitement? 🎉",
  "Your surprise is almost here! 🎁",
  "Make a wish and blow out the candles! 🎂"
];

let messageIndex = 0;

function updateMotivationalMessage() {
  const motivational = document.getElementById("motivational");
  motivational.innerText = motivationalMessages[messageIndex];
  messageIndex = (messageIndex + 1) % motivationalMessages.length;
}

setInterval(updateMotivationalMessage, 5000);
updateMotivationalMessage();

// ⏳ Countdown
const targetDate = new Date("May 15, 2026 00:00:00").getTime();
const startDate = new Date("May 11, 2026 00:00:00").getTime();
const totalTime = targetDate - startDate;

const timer = setInterval(() => {
  const now = new Date().getTime();
  const gap = targetDate - now;
  const elapsed = now - startDate;
  const progress = (elapsed / totalTime) * 100;
  
  document.getElementById("progressFill").style.width = Math.min(progress, 100) + "%";

  if (gap <= 0) {
    clearInterval(timer);
    document.getElementById("progressFill").style.width = "100%";

    const timerBox = document.getElementById("timer");
    timerBox.innerHTML = '<div class="timer-unit"><span class="timer-value" style="font-size: 4rem;">🎂</span></div><div class="timer-unit"><span class="timer-value" style="font-size: 2.5rem; letter-spacing: 3px;">HAPPY BIRTHDAY!</span></div><div class="timer-unit"><span class="timer-value" style="font-size: 4rem;">🎉</span></div>';
    
    document.getElementById("subtitle").innerText = "Time to celebrate Manali! 🎊";
    document.getElementById("motivational").innerText = "The party starts now! 🥳";
    document.getElementById("factText").innerText = "🌟 Wishing you an amazing birthday filled with love and joy! 🌟";

    const btn = document.getElementById("surpriseBtn");
    btn.classList.add("show");
    
    createConfetti();
    createBirthdayConfetti();
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

// 🎊 Confetti animation
function createConfetti() {
  const confettiContainer = document.getElementById("confetti");
  const colors = ["#ff006e", "#ffd60a", "#00d9ff", "#ff006e", "#ffd60a"];
  
  for (let i = 0; i < 100; i++) {
    const confettiPiece = document.createElement("div");
    confettiPiece.className = "confetti-piece";
    confettiPiece.style.left = Math.random() * 100 + "%";
    confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confettiPiece.style.animationDuration = (Math.random() * 2 + 2) + "s";
    confettiPiece.style.animationDelay = Math.random() * 0.5 + "s";
    confettiPiece.style.borderRadius = Math.random() > 0.5 ? "50%" : "0%";
    confettiContainer.appendChild(confettiPiece);
  }
}

// 🎊 Birthday-themed confetti
function createBirthdayConfetti() {
  const confettiContainer = document.getElementById("confetti");
  const emojis = ["🎉", "🎊", "🎈", "🎁", "🎂", "✨", "💖"];
  
  for (let i = 0; i < 50; i++) {
    const confettiPiece = document.createElement("div");
    confettiPiece.className = "confetti-piece";
    confettiPiece.style.left = Math.random() * 100 + "%";
    confettiPiece.style.fontSize = "1.5rem";
    confettiPiece.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    confettiPiece.style.animationDuration = (Math.random() * 3 + 2.5) + "s";
    confettiPiece.style.animationDelay = Math.random() * 0.5 + "s";
    confettiContainer.appendChild(confettiPiece);
  }
}

// Add confetti fall animation to CSS
const style = document.createElement("style");
style.textContent = `
  @keyframes confettiFall {
    to {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// 🔗 Redirect
function goToMain() {
  window.location.href = "https://dsharshitguptaa7.github.io/birthday/";
}
>>>>>>> d859715e2966e89c208916463f2cdead2a7ab76b
