document.addEventListener("DOMContentLoaded", () => {
  const KISI_ISMI = "Ecrin";

  const nameEl = document.getElementById("person-name");
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");
  const success = document.getElementById("success-message");
  const card = document.getElementById("proposal-card");
  const mainText = document.getElementById("main-text");
  const questionText = document.getElementById("question-text");

  nameEl.textContent = KISI_ISMI;

  yesBtn.addEventListener("click", () => {
    mainText.style.opacity = "0";
    questionText.style.opacity = "0";
    yesBtn.style.opacity = "0";
    noBtn.style.opacity = "0";
    
    setTimeout(() => {
      success.classList.remove("hidden");
      card.style.transform = "scale(1.03)";
    }, 400);
  });

  const moveNoButton = () => {
    const rect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - rect.width - 60;
    const maxY = window.innerHeight - rect.height - 100;

    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;

    newX = Math.max(60, Math.min(newX, maxX));
    newY = Math.max(80, Math.min(newY, maxY));

    noBtn.style.transform = `translate(${newX - rect.left}px, ${newY - rect.top}px)`;
  };

  noBtn.addEventListener("mouseenter", moveNoButton);
  noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
  }, { passive: false });
  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
  });
});