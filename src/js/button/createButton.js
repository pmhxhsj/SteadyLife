const createList = () => {
  const $btn = document.querySelector('.create-list-btn');

  $btn.addEventListener('click', (e) => {
    const popUpWidth = 600;
    const popUpHeight = 400;
    console.log(window.screen.width);
    const popupX = window.innerWidth / 2 - popUpWidth / 2;
    const popupY = window.innerHeight / 2 - popUpHeight / 2 + 200;
    window.open(
      'popUp.html',
      'a',
      'width=' +
        popUpWidth +
        ', height=' +
        popUpHeight +
        ', left=' +
        popupX +
        ', top=' +
        popupY
    );
  });
};

export default createList;
