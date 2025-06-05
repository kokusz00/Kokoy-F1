// screens-js/timer.js
let timer;

document.getElementById("startTimerBtn").addEventListener("click", () => {
  clearInterval(timer);

  const min = parseInt(document.getElementById("minutes").value) || 0;
  const sec = parseInt(document.getElementById("seconds").value) || 0;
  let total = min * 60 + sec;

  const display = document.getElementById("countdownDisplay");

  if (total <= 0) {
    display.textContent = "Please set a time.";
    return;
  }

  timer = setInterval(() => {
    const m = Math.floor(total / 60);
    const s = total % 60;
    display.textContent = `${m}:${s.toString().padStart(2, '0')}`;

    if (--total < 0) {
      clearInterval(timer);
      display.textContent = "⏰ Time's up!";
    }
  }, 1000);
});

