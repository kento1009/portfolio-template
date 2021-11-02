const themeDots = document.querySelectorAll('.theme-dot');
let theme = localStorage.getItem('theme')

if (theme == null) {
  setTheme('blue');
} else {
  setTheme(theme);
}

themeDots.forEach((theme) => theme.addEventListener('click', () => {
  let mode = theme.dataset.mode
  setTheme(mode);
}));

function setTheme(mode) {
  if (mode != null) {
    document.querySelector('#theme-style').href = `css/${mode}.css`;
    localStorage.setItem('theme', mode)
  } else {
    return;
  }
}