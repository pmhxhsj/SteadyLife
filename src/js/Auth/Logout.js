import { kakaoLogout } from './Auth.js';

class Logout {
  kakaoOut() {
    document
      .querySelector('.kakao-logout-btn')
      .addEventListener('click', (e) => {
        kakaoLogout();
      });
  }
}

const logout = new Logout();

logout.kakaoOut();
