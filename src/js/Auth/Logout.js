import { kakaoLogin, kakaoLogout } from './Auth.js';

class Logout {
  kakaoOut() {
    document.querySelector('.kakao_logout').addEventListener('click', (e) => {
      kakaoLogout();
    });
  }
}

let getLink = window.location.search;
console.log(getLink);

const log = new Logout();

log.kakaoOut();
