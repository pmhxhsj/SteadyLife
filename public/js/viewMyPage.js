const displayMyPage = () => {
  document.querySelector('#myPage-button').addEventListener('click', (e) => {
    const todo = document.querySelector('.container');
    const mypage = document.querySelector('.mypage-container');
    const mypagebtn = document.querySelector('#myPage-button');
    const todobtn = document.querySelector('#todolist-button');
    const calendar = document.querySelector('.calendar');
    const billboard = document.querySelector('#pieChart');

    todobtn.classList.remove('focus');
    mypagebtn.classList.add('focus');

    todo.classList.add('hidden');
    billboard.classList.add('hidden');

    mypage.classList.remove('hidden');
    mypage.classList.add('appear');

    calendar.classList.remove('hidden');
    calendar.classList.add('appear');
  });
};

const displayTodo = () => {
  document.querySelector('#todolist-button').addEventListener('click', (e) => {
    const todo = document.querySelector('.container');
    const mypage = document.querySelector('.mypage-container');
    const mypagebtn = document.querySelector('#myPage-button');
    const todobtn = document.querySelector('#todolist-button');
    const calendar = document.querySelector('.calendar');
    const billboard = document.querySelector('#pieChart');

    todobtn.classList.add('focus');
    mypagebtn.classList.remove('focus');

    todo.classList.remove('hidden');
    todo.classList.add('appear');
    billboard.classList.remove('hidden');
    billboard.classList.add('appear');
    mypage.classList.add('hidden');
    calendar.classList.add('hidden');
  });
};

export { displayMyPage, displayTodo };
