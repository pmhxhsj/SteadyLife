import Profile from './profile.js';
import Form from './formEvent.js';

const data = await window.Kakao.API.request({
  url: '/v2/user/me',
});

const $profile = new Profile(data);

// Profile display
$profile.printProfile();
setInterval($profile.printDate, 1000);

const $form = new Form();

// Form display
$form.displayForm();
$form.closeForm();
// Form input Event
$form.todoInputException();
$form.timeInputException();
