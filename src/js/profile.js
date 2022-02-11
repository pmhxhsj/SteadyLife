class Profile {
  constructor(data) {
    this.name = data.properties.nickname;
    this.img = data.properties.profile_image;
  }

  printProfile() {
    const profile = document.createElement('div');

    const profile_nickname = document.createElement('p');
    const profile_img = document.createElement('img');

    profile_nickname.id = 'profile-name';
    profile_img.id = 'profile-img';
    profile_img.src = this.img;

    const resultProfileNickname = document.createTextNode(
      `${this.name}님 환영합니다`
    );
    profile_nickname.append(resultProfileNickname);

    profile.appendChild(profile_img);
    profile.appendChild(profile_nickname);

    document.querySelector('#app').appendChild(profile);
  }

  printDate() {
    const today = new Date();
    const dayName = [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
    ];
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
    let day = today.getDay();
    let hours = String(today.getHours()).padStart(2, '0'); // 시
    let minutes = String(today.getMinutes()).padStart(2, '0'); // 분
    let second = String(today.getSeconds()).padStart(2, '0');

    document.querySelector(
      '#clock'
    ).innerText = `📆 ${month}월${date}일 (${dayName[day]}) 
    ⏰ ${hours}:${minutes}:${second}`;

    document.querySelector('#start-time').value = hours + ':' + minutes;
  }
}

export default Profile;
