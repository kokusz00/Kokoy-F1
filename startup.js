window.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById("logo");
  const powered = document.getElementById("powered");

  setTimeout(() => {
    logo.style.opacity = 1;
    powered.style.opacity = 1;
  }, 1000);

  setTimeout(() => {
    window.location.href = "unlock.html";
  }, 6000);
});
