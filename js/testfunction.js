const code = 'dev';
let inputBuffer = '';
window.addEventListener('keydown', (event) => {
    if (event.key.length !== 1) return;
    inputBuffer += event.key;
    if (inputBuffer.length > code.length) {
        inputBuffer = inputBuffer.slice(-code.length);
    }
    if (inputBuffer === code) {
        prov();
        inputBuffer = '';
    }
});
function prov() {
  const root = document.getElementById('root') || document.body;
  root.innerHTML = `
  <h1>Вы вошли в dev режим</h1>
    <br><button id="devmode-exit">Выйти</button>
    <br><button id="devmode-theme">Поменять тему</button>
    <br><select id="devmode-accent"></select>
    <br><button id="devmode-caccent">Изменить акцент</button>
    <br><div style="width: 64px; height: 64px; background-color: var(--accent);"></div><p>акцент</p>
  `;
  const ACCENTS = ['red','green','yellow','blue','purple','orange','emerald'];
  const saved = localStorage.getItem('gf:accent') || 'red';
  const select = document.getElementById('devmode-accent');
  select.innerHTML = ACCENTS.map(a =>
    `<option value="${a}"${a === saved ? ' selected' : ''}>${a}</option>`
  ).join('');
  document.getElementById('devmode-exit').addEventListener('click', () => {
    if (typeof glitify === 'function') glitify();
    else location.reload();
  });
  document.getElementById('devmode-theme').addEventListener('click', () => {
    const cur = localStorage.getItem('gf:theme');
    themer(cur === 'light' ? 'dark' : 'light');
  });
  document.getElementById('devmode-caccent').addEventListener('click', () => {
    const selectedValue = select.value;
    if (typeof accenter === 'function') accenter(selectedValue);
    else document.documentElement.style.setProperty('--accent', selectedValue);
  });
}
