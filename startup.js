window.onload = () => {
  const bootScreen = document.getElementById("bootScreen");

  // Start animation after 1s
  setTimeout(() => {
    bootScreen.style.opacity = 1;
  }, 1000);

  // Redirect to unlock screen after 6s total
  setTimeout(() => {
    window.location.href = "unlock.html";
  }, 6000);
};
