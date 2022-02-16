import {
  exceptionTodoInput,
  exceptionTimeInput,
  exceptionCategoryInput,
} from './inputException.js';

class Form {
  constructor() {
    this.data = [];
  }
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

  categoryInputException() {
    document
      .querySelector('#form-submit-button')
      .addEventListener('click', (e) => {
        e.preventDefault();

        const categoryValue = document.querySelector('.input-category').value;

        if (exceptionCategoryInput(categoryValue)) {
          alert('카테고리를 선택해주세요.');
          return;
        } else {
          this.data.push(categoryValue);
          return true;
        }
      });
  }

  todoInputException() {
    document
      .querySelector('#form-submit-button')
      .addEventListener('click', (e) => {
        const inputValue = document.querySelector('.input-title').value;

        if (exceptionTodoInput(inputValue)) {
          alert('To do를 입력해주세요.');
          return;
        } else {
          this.data.push(inputValue);
          return;
        }
      });
  }

  timeInputException() {
    document
      .querySelector('#form-submit-button')
      .addEventListener('click', (e) => {
        const startTimeValue = document.querySelector('#start-time').value;
        const endTimeValue = document.querySelector('#end-time').value;
        console.log(startTimeValue);
        console.log(endTimeValue);
        if (
          exceptionTimeInput(startTimeValue) ||
          exceptionTimeInput(endTimeValue)
        ) {
          alert('시간을 입력해주세요');
          return;
        } else {
          const [startTimeHour, startTimeMinute] = startTimeValue
            .split(':')
            .map(Number);
          const [endTimeHour, endTimeMinute] = endTimeValue
            .split(':')
            .map(Number);

          const $time =
            endTimeHour * 60 +
            endTimeMinute -
            (startTimeHour * 60 + startTimeMinute);

          console.log($time);

          const hours = Math.floor($time / 60);
          const minute = $time % 60;

          this.data.push(`${hours}:${minute}`);
          return;
        }
      });
  }
}

export default Form;
