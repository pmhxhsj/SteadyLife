import {
  displayTodoCreateForm,
  formatStartTimeCurrentTime,
} from './viewCreateForm.js';
import { displayMyPage, displayTodo } from './viewMyPage.js';
import { displayStatistic, displayHelpWindow } from './viewStatistics.js';
import { darkMode } from './darkMode.js';

formatStartTimeCurrentTime();
displayTodoCreateForm();
displayMyPage();
displayTodo();
displayStatistic();
displayHelpWindow();
darkMode();
