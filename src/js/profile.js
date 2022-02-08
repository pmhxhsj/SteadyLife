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
    // console.log(this.img);

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

    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
    let day = today.getDay();
    let hours = String(today.getHours()).padStart(2, '0'); // 시
    let minutes = String(today.getMinutes()).padStart(2, '0'); // 분
    let second = String(today.getSeconds()).padStart(2, '0');
    let $day;

    switch (day) {
      case 0:
        $day = '일요일';
        break;
      case 1:
        $day = '월요일';
        break;
      case 2:
        $day = '화요일';
        break;
      case 3:
        $day = '수요일';
        break;
      case 4:
        $day = '목요일';
        break;
      case 5:
        $day = '금요일';
        break;
      case 6:
        $day = '토요일';
        break;
    }

    document.querySelector(
      '#clock'
    ).innerText = `📆 ${month}월${date}일 (${$day}) 
    ⏰ ${hours}:${minutes}:${second}`;
  }
}

export default Profile;
