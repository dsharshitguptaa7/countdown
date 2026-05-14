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

  if (factText) {
    factText.innerText = birthdayFacts[factIndex];
    factIndex = (factIndex + 1) % birthdayFacts.length;
  }
}

setInterval(updateFact, 8000);
updateFact();


// 💓 Floating Hearts
function createFloatingHearts() {

  const heartsContainer = document.getElementById("hearts");

  if (!heartsContainer) return;

  const heartEmojis = ["💖", "💕", "💗", "💝", "✨", "🌟"];

  const heart = document.createElement("div");

  heart.className = "heart";
  heart.innerText =
    heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDuration =
    (Math.random() * 4 + 5) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createFloatingHearts, 1000);


// ⭐ Stars
const starsContainer = document.querySelector(".stars");

if (starsContainer) {

  for (let i = 0; i < 100; i++) {

    const star = document.createElement("span");

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDuration =
      (Math.random() * 5 + 5) + "s";

    starsContainer.appendChild(star);
  }
}


// 🎊 Motivational Messages
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

  const motivational =
    document.getElementById("motivational");

  if (motivational) {

    motivational.innerText =
      motivationalMessages[messageIndex];

    messageIndex =
      (messageIndex + 1) %
      motivationalMessages.length;
  }
}

setInterval(updateMotivationalMessage, 5000);
updateMotivationalMessage();


// 🔒 FORCE HIDE ON LOAD
const giftLink = document.getElementById("giftLink");
const unlockedText = document.getElementById("unlockedText");
const mysteryBox = document.getElementById("mysteryBox");
const surpriseBtn = document.getElementById("surpriseBtn");

if (giftLink) {
  giftLink.style.display = "none";
}

if (unlockedText) {
  unlockedText.style.display = "none";
}

if (surpriseBtn) {
  surpriseBtn.style.display = "none";
}


// ⏳ COUNTDOWN
const targetDate =
  new Date(2026, 4, 15, 0, 0, 0).getTime();

const startDate =
  new Date(2026, 4, 11, 0, 0, 0).getTime();

const totalTime = targetDate - startDate;


const timer = setInterval(() => {

  const now = new Date().getTime();

  const gap = targetDate - now;

  const elapsed = now - startDate;

  const progress =
    (elapsed / totalTime) * 100;


  // Progress Bar
  const progressFill =
    document.getElementById("progressFill");

  if (progressFill) {

    progressFill.style.width =
      Math.min(progress, 100) + "%";
  }


  // Countdown Finished
  if (gap <= 0) {

    clearInterval(timer);

    // Timer Celebration
    const timerBox =
      document.getElementById("timer");

    if (timerBox) {

      timerBox.innerHTML = `
        <div class="timer-unit">
          <span class="timer-value" style="font-size:4rem;">🎂</span>
        </div>

        <div class="timer-unit">
          <span class="timer-value"
          style="font-size:2.5rem;">
          HAPPY BIRTHDAY!
          </span>
        </div>

        <div class="timer-unit">
          <span class="timer-value" style="font-size:4rem;">🎉</span>
        </div>
      `;
    }

    // Text Updates
    document.getElementById("subtitle").innerText =
      "Time to celebrate Manali! 🎊";

    document.getElementById("motivational").innerText =
      "The party starts now! 🥳";

    document.getElementById("factText").innerText =
      "🌟 Wishing you an amazing birthday filled with love and joy! 🌟";


    // Unlock Gift
    unlockSecondGift();

    createConfetti();
    createBirthdayConfetti();

    return;
  }


  // Timer Values
  const days =
    Math.floor(gap / (1000 * 60 * 60 * 24));

  const hours =
    Math.floor(
      (gap % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );

  const minutes =
    Math.floor(
      (gap % (1000 * 60 * 60)) /
      (1000 * 60)
    );

  const seconds =
    Math.floor(
      (gap % (1000 * 60)) / 1000
    );


  // Update UI
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

}, 1000);



// 🎁 Unlock Gift
function unlockSecondGift() {

  const milestone2 =
    document.querySelector(
      ".timeline-milestone.milestone-2"
    );

  if (milestone2) {
    milestone2.classList.add("unlocked");
  }

  if (mysteryBox) {
    mysteryBox.style.display = "none";
  }

  if (giftLink) {
    giftLink.style.display = "block";
  }

  if (unlockedText) {
    unlockedText.style.display = "block";
  }

  if (surpriseBtn) {
    surpriseBtn.style.display = "inline-block";
  }
}


// 🎊 Confetti
function createConfetti() {

  const confettiContainer =
    document.getElementById("confetti");

  if (!confettiContainer) return;

  const colors = [
    "#ff006e",
    "#ffd60a",
    "#00d9ff",
    "#ffffff"
  ];

  for (let i = 0; i < 100; i++) {

    const piece =
      document.createElement("div");

    piece.className = "confetti-piece";

    piece.style.left =
      Math.random() * 100 + "%";

    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.animationDuration =
      (Math.random() * 2 + 2) + "s";

    confettiContainer.appendChild(piece);
  }
}


// 🎊 Birthday Emoji Confetti
function createBirthdayConfetti() {

  const confettiContainer =
    document.getElementById("confetti");

  if (!confettiContainer) return;

  const emojis = [
    "🎉",
    "🎊",
    "🎂",
    "🎁",
    "✨",
    "💖"
  ];

  for (let i = 0; i < 40; i++) {

    const piece =
      document.createElement("div");

    piece.className = "confetti-piece";

    piece.style.left =
      Math.random() * 100 + "%";

    piece.style.fontSize = "1.5rem";

    piece.innerText =
      emojis[Math.floor(Math.random() * emojis.length)];

    piece.style.animationDuration =
      (Math.random() * 3 + 2) + "s";

    confettiContainer.appendChild(piece);
  }
}


// 🔗 Redirect
function goToMain() {

  window.location.href =
    "https://dsharshitguptaa7.github.io/birthday/";
}


// 🎁 Mystery Box Click Effect
document.addEventListener("DOMContentLoaded", () => {

  const mystery =
    document.querySelector(".mystery-box");

  if (!mystery) return;

  mystery.addEventListener("click", function () {

    this.style.animation = "none";

    setTimeout(() => {

      this.style.animation =
        "mysteryShake 0.5s ease-in-out";

    }, 10);

    const mysteryText =
      this.querySelector(".mystery-text");

    if (mysteryText) {

      const messages = [
        "🎊 Almost there!",
        "⏰ Tick tock!",
        "🎁 Getting closer!",
        "✨ Can you feel it?",
        "🎉 Surprise incoming!"
      ];

      mysteryText.innerText =
        messages[
          Math.floor(Math.random() * messages.length)
        ];
    }
  });
});


// 🎊 Confetti Animation CSS
const style = document.createElement("style");

style.textContent = `
@keyframes confettiFall {

  to{
    transform:
      translateY(100vh)
      rotate(360deg);

    opacity:0;
  }
}
`;

document.head.appendChild(style);