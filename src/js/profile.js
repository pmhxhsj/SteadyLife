const data = await window.Kakao.API.request({
  url: '/v2/user/me',
});

class Profile {
  USER = {
    nickname: data.properties.nickname,
    img: data.properties.profile_image,
  };
  printProfile(obj) {
    const profile = document.createElement('div');

    const profile_nickname = document.createElement('p');
    profile_nickname.id = 'profile-name';
    const profile_img = document.createElement('img');
    profile_img.src = obj.img;
    profile_img.id = 'profile-img';

    const resultProfileNickname = document.createTextNode(
      `${obj.nickname}님 환영합니다.`
    );
    profile_nickname.append(resultProfileNickname);

    profile.appendChild(profile_img);
    profile.appendChild(profile_nickname);

    document.querySelector('#app').appendChild(profile);
  }
}

export default Profile;
