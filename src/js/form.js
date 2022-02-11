class Form {
  displayForm() {
    document
      .querySelector('.create-list-btn')
      .addEventListener('click', (e) => {
        e.preventDefault();

        const target = document.querySelector('.to-do-create-container');

        target.classList.remove('hidden');
        target.classList.add('appear');
      });
  }

  closeForm() {
    document
      .querySelector('#form-close-button')
      .addEventListener('click', (e) => {
        e.preventDefault();

        const target = document.querySelector('.to-do-create-container');

        target.classList.add('hidden');
      });
  }
}

export default Form;
