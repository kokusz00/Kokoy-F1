const correctPin = "1234";
let enteredPin = "";

const clock = document.getElementById("clock");
const swipeUp = document.getElementById("swipeUp");
const lockScreen = document.getElementById("lockScreen");
const pinScreen = document.getElementById("pinScreen");
const dots = document.querySelectorAll(".dot");

function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
setInterval(updateClock, 1000);
updateClock();

// 🔄 Changed from swipe to click
swipeUp.addEventListener("click", () => {
  lockScreen.style.display = "none";
  pinScreen.style.display = "block";
});

document.querySelectorAll("#numpad button").forEach(btn => {
  btn.addEventListener("click", () => {
    if (enteredPin.length < 4) {
      enteredPin += btn.textContent;
      dots[enteredPin.length - 1].style.background = "white";
    }

    if (enteredPin.length === 4) {
      if (enteredPin === correctPin) {
        window.location.href = "home.html";
      } else {
        dots.forEach(dot => dot.style.background = "grey");
        document.getElementById("dots").classList.add("shake");
        setTimeout(() => {
          document.getElementById("dots").classList.remove("shake");
        }, 400);
        enteredPin = "";
      }
    }
  });
});
