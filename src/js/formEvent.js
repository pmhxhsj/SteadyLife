import { exceptionTodoInput, exceptionTimeInput } from './inputException.js';

class Form {
  constructor(data) {}
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

  todoInputException() {
    document
      .querySelector('#form-submit-button')
      .addEventListener('click', (e) => {
        const inputValue = document.querySelector('.input-title').value;

        e.preventDefault();
        if (exceptionTodoInput(inputValue)) {
          return true;
        } else {
          alert('To do를 입력해주세요.');
          return false;
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

          return $time;
        }
      });
  }
}

export default Form;
