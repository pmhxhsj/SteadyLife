import KEY from './temporaryKey.js';

window.Kakao.init(KEY);

const kakaoLogin = () => {
  window.Kakao.Auth.login({
    scope: 'profile, account_email',
    success(response) {
      console.log(response);
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (res) => {},
      });

      window.location.href = 'main.html';
    },
    fail(error) {
      console.log(error);
    },
  });
};

const kakaoLogout = () => {
  if (Kakao.Auth.getAccessToken()) {
    Kakao.API.request({
      url: '/v1/user/unlink',
      success: function (response) {
        alert('로그아웃 되었습니다.');
        window.location.href = 'index.html';
      },
      fail: function (error) {
        console.log(error);
      },
    });
    Kakao.Auth.setAccessToken(undefined);
  }
};

export { kakaoLogin, kakaoLogout };
