import Profile from './profile.js';
import Form from './form.js';

const data = await window.Kakao.API.request({
  url: '/v2/user/me',
});

const $profile = new Profile(data);
const $form = new Form();

$profile.printProfile();
setInterval($profile.printDate, 1000);

$form.displayForm();
$form.closeForm();
