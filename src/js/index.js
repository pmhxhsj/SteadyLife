import Profile from './profile.js';

const data = await window.Kakao.API.request({
  url: '/v2/user/me',
});

const $profile = new Profile(data);

$profile.printProfile();
setInterval($profile.printDate, 1000);
