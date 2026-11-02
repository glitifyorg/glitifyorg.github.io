document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');
  function themer(t) {
    console.log(`Тема изменена на ${t}`);
    const theme = t;
    root.theme = t;
    localStorage.setItem('gf:theme', t)
  }
  function accenter(a) {
    console.log(`Акцент изменён на ${a}`);
    const accent = a;
    root.accent = a;
    localStorage.setItem('gf:accent', a)
   }
  let lstheme = localStorage.getItem('gf:theme');
  if (lstheme !== null) {
    if (lstheme === 'light') {
      themer('light');
    } else if (lstheme === 'dark') {
      themer('dark');
    } else {
      console.warn(`Сохранённая тема не найдена. Необходимо проверить значение: ${lstheme}`);
      let lspdark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      let lsplight = window.matchMedia('(prefers-color-scheme: light)').matches;
      if (lcpdark) {
        themer('dark');
      } else if (lcplight) {
        themer('light');
      } else {
        console.warn(`Тема пользователя не light и не dark!`)
      }
    }
  } else {
    let lspdark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let lsplight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (lcpdark) {
      themer('dark');
    } else if (lcplight) {
      themer('light');
    } else {
      console.warn(`Тема пользователя не light и не dark!`)
    }
  }
  let lsaccent = localStorage.getItem('gf:accent');
  if (lsaccent !== null) {
    if (lsaccent === 'emerald') {
      accenter('emerald');
    } else if (lsaccent === 'red') {
      accenter('red');
    } else if (lsaccent === 'yellow') {
      accenter('yellow');
    } else if (lsaccent === 'green') {
      accenter('green');
    } else if (lsaccent === 'blue') {
      accenter('blue');
    } else if (lsaccent === 'purple') {
      accenter('purple');
    } else if (lsaccent === 'orange') {
      accenter('orange');
    } else {
      console.warn(`Сохранённый акцент не найден. Необходимо проверить значение: ${lsaccent}`);
    }
  } else {
    accenter('emerald');
  }
  try {
    let framew = window.self !== window.top;
    if (framew) {
      const framee = document.querySelector('iframe');
      if (framee) {
        let framed = new URL(framee.src).hostname;
      }
    }
  } catch (e) {
    let framew = true;
    let framed = false;
  }
  if (framew) {
    if (framed !== false) {
      if (framed !== 'glitifyorg.github.io') {
        if (framed !== 'letmeowllc.github.io') {
          throw new Error('С этого сайта нельзя создавать фрейм glitify');
        }
      }
    } else {
      throw new Error('Домен, который создал фрейм glitify не опознан.');
    }
  }
});
