const statistic = () => {
  document.querySelector('#statistics').addEventListener('click', (e) => {
    const timeArticle = document.querySelector('#time-article-container');

    timeArticle.classList.remove('hidden');
    timeArticle.classList.add('appear');
  });
};

const statisticClose = () => {
  document
    .querySelector('#time-article-close-button')
    .addEventListener('click', (e) => {
      const timeArticle = document.querySelector('#time-article-container');

      timeArticle.classList.remove('appear');
      timeArticle.classList.add('hidden');
    });
};

export { statistic, statisticClose };
