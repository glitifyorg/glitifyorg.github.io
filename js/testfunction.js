const code = 'dev';
let inputBuffer = '';
window.addEventListener('keydown', (event) => {
    if (event.key.length === 1) {
        inputBuffer += event.key;
        if (inputBuffer.length > secretCode.length) {
            inputBuffer = inputBuffer.substring(inputBuffer.length - secretCode.length);
        }
        if (inputBuffer === code) {
            prov();
            inputBuffer = '';
        }
    }
});
function prov() {
  root.innerHTML = `
    <h1>Вы вошли в dev режим</h1>
    <br><button id="devmode-exit">Выйти</button>
    <br><button id="devmode-theme">Поменять тему</button>
    <br><select id="devmode-accent"></select>
    <br><button id="devmode-caccent">Изменить акцент</button>
    <br><div style="width: 64px; height: 64px; background-color: var(--accent);"></div><p>акцент</p>
  `;
  const ACCENTS = ['red', 'green', 'yellow', 'blue', 'purple', 'orange', 'emerald'];
  const saved = localStorage.getItem('gf:accent') || 'red';
  const select = document.getElementById('devmode-accent');
  select.innerHTML = ACCENTS.map(a =>
    `<option value="${a}"${a === saved ? ' selected' : ''}>${a}</option>`
  ).join('');
  document.getElementById('devmode-exit').addEventListener('click', () => {
    glitify();
  });
  document.getElementById('devmode-theme').addEventListener('click', () => {
    if (localStorage.getItem('gf:theme') === 'light') { themer('dark'); } else if (localStorage.getItem('gf:theme') === 'dark') { themer('light'); }
  });
  document.getElementById('devmode-caccent').addEventListener('click', () => {
      const selectedValue = document.getElementById('devmode-caccent').value;
      accenter(selectedValue);
  });
}
