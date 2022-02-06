import { kakaoLogin } from './Auth.js';

class Login {
  kakaoIn() {
    document
      .querySelector('.kakao-login-btn')
      .addEventListener('click', (e) => {
        kakaoLogin();
      });
  }
}

const login = new Login();

login.kakaoIn();
