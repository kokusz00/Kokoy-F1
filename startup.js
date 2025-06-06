window.onload = () => {
  const logo = document.getElementById("logo");
  const powered = document.getElementById("powered");

  setTimeout(() => {
    logo.classList.remove("hidden");
    logo.classList.add("show");
  }, 1000);

  setTimeout(() => {
    powered.classList.remove("hidden");
    powered.classList.add("show");
  }, 3000);

  setTimeout(() => {
    window.location.href = "unlock.html";
  }, 6000);
};
