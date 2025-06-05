// screens-js/settings.js
document.getElementById("savePinBtn").addEventListener("click", () => {
  const pin = document.getElementById("pinInput").value;
  if (pin.length < 4) {
    document.getElementById("statusMsg").textContent = "PIN must be at least 4 digits.";
    return;
  }
  localStorage.setItem("kokoy_pin", pin);
  document.getElementById("statusMsg").textContent = "PIN saved successfully!";
});

document.getElementById("powerOffBtn").addEventListener("click", () => {
  document.getElementById("screen").innerHTML = "";
});

