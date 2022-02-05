import key from '../config/key.js';

window.Kakao.init(key.kakao);

function kakaoLogin() {
  let user1;
  window.Kakao.Auth.login({
    // redirectUri: 'main.html',
    scope: 'profile, account_email', // 동의항목 페이지에 있는 개인정보 보호 테이블의 활성화된 ID값을 넣습니다.
    success(response) {
      console.log(response); // 로그인 성공하면 받아오는 데이터
      window.Kakao.API.request({
        // 사용자 정보 가져오기
        url: '/v2/user/me',
        success: (res) => {
          const { kakao_account } = res;

          user1 = kakao_account.profile.nickname;
          console.log(kakao_account);
          // console.log(user);
        },
      });

      window.location.href = 'main.html?user=' + user1; // 리다이렉트 되는 코드
    },
    fail(error) {
      console.log(error);
    },
  });
}

function kakaoLogout() {
  if (!Kakao.Auth.getAccessToken()) {
    console.log('Not logged in.');
    return;
  }
  Kakao.Auth.logout((response) => {
    alert('로그아웃 되었습니다.');
    window.location.href = 'index.html';
  });
}

export { kakaoLogin, kakaoLogout };
