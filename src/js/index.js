import { kakaoLogin, kakaoLogout } from '../js/Auth/Auth.js';

let data = await window.Kakao.API.request({
  url: '/v2/user/me',
});

const USER = {
  nickname: data.properties.nickname,
  img: data.properties.profile_image,
};

console.log(USER);

const profileName = document.querySelector('.user-profile-name');
profileName.innerHTML = `<div>${USER.nickname}</div>`;

const profileImg = document.querySelector('.user-profile-img');
profileImg.innerHTML = `<img class='profile-img' src=${USER.img} />`;
