const darkMode = () => {
  localStorage.setItem('darkmode', 'enable');

  document.querySelector('#dark-mode').addEventListener('click', (e) => {
    if (localStorage.getItem('darkmode') === 'enable') {
      document.body.dataset.theme = 'dark';
      document.body.classList.add('dark-mode');

      document.querySelector('#dark-mode').innerHTML = '🔅';

      localStorage.setItem('darkmode', 'able');
    } else {
      document.body.dataset.theme = 'basic';
      document.body.classList.remove('dark-mode');

      document.querySelector('#dark-mode').innerHTML = '🌙';

      localStorage.setItem('darkmode', 'enable');
    }
  });
};

export { darkMode };
