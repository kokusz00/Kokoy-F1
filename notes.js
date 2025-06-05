// screens-js/notes.js
const area = document.getElementById("notesArea");
const status = document.getElementById("saveStatus");

// Load notes on open
area.value = localStorage.getItem("kokoy_notes") || "";

document.getElementById("saveNotesBtn").addEventListener("click", () => {
  localStorage.setItem("kokoy_notes", area.value);
  status.textContent = "Notes saved!";
  setTimeout(() => status.textContent = "", 2000);
});

