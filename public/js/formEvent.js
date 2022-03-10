const currentTime = () => {
  const today = new Date();
  const hours = String(today.getHours()).padStart(2, '0'); // 시
  const minutes = String(today.getMinutes()).padStart(2, '0'); // 분

  const startTime = document.querySelector('#todo-start-time-input');

  startTime.value = hours + ':' + minutes;
};

const displayTodoCreateForm = () => {
  document.querySelector('.create-list-btn').addEventListener('click', (e) => {
    const target = document.querySelector('.to-do-create-container');
    const timeArticle = document.querySelector('#time-article-container');

    timeArticle.classList.add('hidden');
    target.classList.remove('hidden');
    target.classList.add('appear');
  });

  document
    .querySelector('#form-close-button')
    .addEventListener('click', (e) => {
      const target = document.querySelector('.to-do-create-container');

      target.classList.add('hidden');
    });
};

export { currentTime, displayTodoCreateForm };
