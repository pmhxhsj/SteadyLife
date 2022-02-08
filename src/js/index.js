import Profile from './profile.js';
import createList from './button/createButton.js';
const data = await window.Kakao.API.request({
  url: '/v2/user/me',
});

const $profile = new Profile(data);

$profile.printProfile();
setInterval($profile.printDate, 1000);

createList();
