// main.js
let isOn = false;
const screen = document.getElementById('screen');
const powerBtn = document.getElementById('powerBtn');

powerBtn.addEventListener('click', () => {
  isOn = !isOn;
  if (isOn) {
    loadScreen('startup');
    setTimeout(() => loadScreen('home'), 4000);
  } else {
    screen.innerHTML = '';
  }
});

function loadScreen(name) {
  fetch(`screens/${name}.html`)
    .then(res => res.text())
    .then(html => {
      screen.innerHTML = html;
      const cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = `screens-css/${name}.css`;
      document.head.appendChild(cssLink);

      const script = document.createElement('script');
      script.src = `screens-js/${name}.js`;
      document.body.appendChild(script);
    });
}

