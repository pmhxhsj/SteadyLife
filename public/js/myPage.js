const displayMyPage = () => {
  document.querySelector('#myPage-button').addEventListener('click', (e) => {
    const todo = document.querySelector('.container');
    const mypage = document.querySelector('.mypage-container');
    const mypagebtn = document.querySelector('#myPage-button');
    const todobtn = document.querySelector('#todolist-button');

    todobtn.classList.remove('focus');
    mypagebtn.classList.add('focus');

    todo.classList.add('hidden');
    mypage.classList.remove('hidden');
    mypage.classList.add('appear');
  });
};

const displayTodo = () => {
  document.querySelector('#todolist-button').addEventListener('click', (e) => {
    const todo = document.querySelector('.container');
    const mypage = document.querySelector('.mypage-container');
    const mypagebtn = document.querySelector('#myPage-button');
    const todobtn = document.querySelector('#todolist-button');

    todobtn.classList.add('focus');
    mypagebtn.classList.remove('focus');
    mypage.classList.add('hidden');
    todo.classList.remove('hidden');
    todo.classList.add('appear');
  });
};

export { displayMyPage, displayTodo };
