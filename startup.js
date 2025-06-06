window.onload = () => {
  const bootScreen = document.getElementById("bootScreen");

  // Show animation after 1 second
  setTimeout(() => {
    bootScreen.style.opacity = 1;
  }, 1000);

  // After 6 seconds total, go to unlock.html
  setTimeout(() => {
    window.location.href = "unlock.html";
  }, 6000);
};
