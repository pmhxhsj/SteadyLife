import Profile from './profile.js';

const data = await window.Kakao.API.request({
  url: '/v2/user/me',
});

const $profile = new Profile();

$profile.printProfile($profile.USER);
setInterval($profile.printDate, 1000);
