const displayStatistic = () => {
  document.querySelector('#statistics').addEventListener('click', (e) => {
    const timeArticle = document.querySelector('.time-article-container');
    const target = document.querySelector('.to-do-create-container');

    target.classList.add('hidden');
    timeArticle.classList.remove('hidden');
    timeArticle.classList.add('appear');
  });

  document
    .querySelector('#time-article-close-button')
    .addEventListener('click', (e) => {
      const timeArticle = document.querySelector('.time-article-container');

      timeArticle.classList.add('hidden');
    });
};

const displayHelpWindow = () => {
  document
    .querySelector('#time-article-help-button')
    .addEventListener('click', (e) => {
      const helpTable = document.querySelector('#help-container');

      helpTable.classList.remove('hidden');
      helpTable.classList.add('appear');
    });

  document.querySelector('#help-close-btn').addEventListener('click', (e) => {
    const helpTable = document.querySelector('#help-container');

    helpTable.classList.add('hidden');
  });
};

export { displayStatistic, displayHelpWindow };
