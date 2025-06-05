// main.js

const BASE_PATH = '/Kokoy-F1/'; // Base path for GitHub Pages

const screen = document.getElementById("screen");
const powerBtn = document.getElementById("powerBtn");
let isOn = false;
let isLocked = true;
let currentPIN = null;

powerBtn.addEventListener("click", () => {
  if (!isOn) {
    turnOnPhone();
  } else {
    turnOffPhone();
  }
});

function turnOnPhone() {
  isOn = true;
  screen.innerHTML = "";
  fetch("startup.html")
    .then(res => res.text())
    .then(html => {
      screen.innerHTML = html;
      const script = document.createElement("script");
      script.src = "startup.js";
      screen.appendChild(script);

      const style = document.createElement("link");
      style.rel = "stylesheet";
      style.href = "startup.css";
      document.head.appendChild(style);
    });
}

function turnOffPhone() {
  isOn = false;
  screen.innerHTML = '<div class="off-screen"></div>';
}

// Used by app buttons
function loadApp(appName) {
  const htmlPath = `${BASE_PATH}screens/${appName}.html`;
  const jsPath = `${BASE_PATH}screens-js/${appName}.js`;
  const cssPath = `${BASE_PATH}screens-css/${appName}.css`;

  fetch(htmlPath)
    .then(res => {
      if (!res.ok) throw new Error("App not found");
      return res.text();
    })
    .then(html => {
      screen.innerHTML = html;

      const js = document.createElement("script");
      js.src = jsPath;
      screen.appendChild(js);

      const css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = cssPath;
      document.head.appendChild(css);
    })
    .catch(() => {
      screen.innerHTML = `<p style="color:white; padding: 20px;">App "${appName}" not found.</p>`;
    });
}
