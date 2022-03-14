const statistic = () => {
  document.querySelector('#statistics').addEventListener('click', (e) => {
    const timeArticle = document.querySelector('.time-article-container');
    const target = document.querySelector('.to-do-create-container');

    target.classList.add('hidden');
    timeArticle.classList.remove('hidden');
    timeArticle.classList.add('appear');
  });
};

const statisticClose = () => {
  document
    .querySelector('#time-article-close-button')
    .addEventListener('click', (e) => {
      const timeArticle = document.querySelector('.time-article-container');

      timeArticle.classList.add('hidden');
    });
};

export { statistic, statisticClose };
