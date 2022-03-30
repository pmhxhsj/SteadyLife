const darkMode = () => {
  localStorage.setItem('darkmode', 'enable');

  document.querySelector('#dark-mode').addEventListener('click', (e) => {
    if (localStorage.getItem('darkmode') === 'enable') {
      // style 다크모드로 변경
      localStorage.removeItem('darkmode');
      localStorage.setItem('darkmode', 'able');
    } else {
      // style 다크모드 해제
      localStorage.removeItem('darkmode');
      localStorage.setItem('darkmode', 'enable');
    }
  });
};

export { darkMode };
