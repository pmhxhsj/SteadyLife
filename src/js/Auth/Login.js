import { kakaoLogin, kakaoLogout } from './Auth.js';

class Login {
  kakaoIn() {
    document.querySelector('.kakao_login').addEventListener('click', (e) => {
      kakaoLogin();
    });
  }
}

const log = new Login();

log.kakaoIn();
