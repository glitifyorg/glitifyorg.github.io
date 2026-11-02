document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');  
  function themer(t) {
    console.log(`Тема изменена на ${t}`);
    root.theme = t;
    localStorage.setItem('gf:theme', t);
  }
  function accenter(a) {
    console.log(`Акцент изменён на ${a}`);
    root.accent = a;
    localStorage.setItem('gf:accent', a);
  }
  let lstheme = localStorage.getItem('gf:theme');
  if (lstheme === 'light' || lstheme === 'dark') {
    themer(lstheme);
  } else {
    if (lstheme !== null) {
      console.warn(`Сохранённая тема не найдена. Необходимо проверить значение: ${lstheme}`);
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (prefersDark) {
      themer('dark');
    } else if (prefersLight) {
      themer('light');
    } else {
      console.warn(`Тема пользователя не light и не dark!`);
    }
  }
  let lsaccent = localStorage.getItem('gf:accent');
  const validAccents = ['emerald', 'red', 'yellow', 'green', 'blue', 'purple', 'orange'];
  if (validAccents.includes(lsaccent)) {
    accenter(lsaccent);
  } else {
    if (lsaccent !== null) {
      console.warn(`Сохранённый акцент не найден. Необходимо проверить значение: ${lsaccent}`);
    }
    accenter('emerald');
  }
  let isFramed = false;
  let frameHost = null;
  try {
    isFramed = window.self !== window.top;
    if (isFramed && document.referrer) {
      frameHost = new URL(document.referrer).hostname;
    }
  } catch (e) {
    isFramed = true;
    frameHost = null;
  }
  if (isFramed) {
    const allowedHosts = ['glitifyorg.github.io', 'letmeowllc.github.io'];
    if (!frameHost || !allowedHosts.includes(frameHost)) {
      throw new Error('С этого сайта нельзя создавать фрейм glitify');
    }
  }
  root.innerHTML = `
    <div class="container">
      <h1 class="title">404</h1>
      <p class="text">Не найдено</p>
    </div>
  `;
});
