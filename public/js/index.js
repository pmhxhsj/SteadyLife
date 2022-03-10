import { displayTodoCreateForm, currentTime } from './formEvent.js';
import changeDate from './changeDate.js';
import { displayMyPage, displayTodo } from './myPage.js';
import { statistic, statisticClose } from './statistics.js';

changeDate();
displayTodoCreateForm();
currentTime();
displayMyPage();
displayTodo();
statistic();
statisticClose();
