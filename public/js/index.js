import {
  displayTodoCreateForm,
  formatStartTimeCurrentTime,
} from './viewCreateForm.js';
import changeCorrectDate from './changeDate.js';
import { displayMyPage, displayTodo } from './viewMyPage.js';
import { displayStatistic, displayHelpWindow } from './viewStatistics.js';

formatStartTimeCurrentTime();
changeCorrectDate();
displayTodoCreateForm();
displayMyPage();
displayTodo();
displayStatistic();
displayHelpWindow();
