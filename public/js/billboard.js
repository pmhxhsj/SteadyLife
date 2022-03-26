const displayBillboard = () => {
  const chartArr = document.querySelectorAll('.pieChart');
  const dateObj = document.querySelector('#dateObj').innerHTML.split(',');

  const arr = [];

  while (dateObj.length) {
    arr.push(dateObj.splice(0, 7));
  }

  chartArr.forEach((v) => {
    const value = v.classList[1];
    let isBlank = true;
    let [study, reading, exercise, walk, love, other] = [0, 0, 0, 0, 0, 0];

    for (let i = 0; i < arr.length; i++) {
      if (value === arr[i][0]) {
        study = +arr[i][1];
        reading = +arr[i][2];
        exercise = +arr[i][3];
        walk = +arr[i][4];
        love = +arr[i][5];
        other = +arr[i][6];
        isBlank = false;
        break;
      }
    }

    if (isBlank) {
      const chart = bb.generate({
        data: {
          columns: [['noData', 1]],
          type: 'pie',
        },
        pie: {
          label: {
            show: false,
          },
        },

        bindto: `#${v.id}`,
      });

      chart.legend.hide();

      chart.data.colors({
        noData: 'rgba(225,225,225,0.5)',
      });

      // chart.resize({
      //   width: 85,
      //   height: 100,
      // });
      open_chatroom(chart);

      return;
    }

    let formatStudy = convertMinutesToHours(study);
    let formatReading = convertMinutesToHours(reading);
    let formatExercise = convertMinutesToHours(exercise);
    let formatWalk = convertMinutesToHours(walk);
    let formatLove = convertMinutesToHours(love);
    let formatOther = convertMinutesToHours(other);

    const chart = bb.generate({
      data: {
        columns: [
          ['공부', study],
          ['독서', reading],
          ['운동', exercise],
          ['산책', walk],
          ['데이트', love],
          ['기타', other],
        ],
        type: 'pie',
        onclick: function () {
          Swal.fire(`
            공부: ${formatStudy}\n
            독서: ${formatReading}\n
            운동: ${formatExercise}\n
            산책: ${formatWalk}\n
            데이트: ${formatLove}\n
            기타: ${formatOther}
            `);
        },
      },
      pie: {
        label: {
          show: false,
        },
      },
      bindto: `#${v.id}`,
    });

    chart.legend.hide();

    chart.data.colors({
      공부: 'rgb(223,212,228)',
      독서: 'rgba(251,157,167,0.5)',
      운동: 'rgba(251,222,162,0.5)',
      산책: 'rgba(252,204,212,0.5)',
      데이트: 'rgba(142,182,149,0.5)',
      기타: 'rgba(62,149,205,0.5)',
    });

    open_chatroom(chart);
  });
};

function convertMinutesToHours(min) {
  const hour =
    String(Math.floor(min / 60)).length === 1
      ? '0' + String(Math.floor(min / 60))
      : String(Math.floor(min / 60));
  const minutes =
    String(min % 60).length === 1 ? '0' + String(min % 60) : String(min % 60);

  return +hour + '시간' + +minutes + '분';
}

function open_chatroom(cc) {
  var windowWidth = $(window).width();
  if (windowWidth < 500) {
    //창 가로 크기가 500 미만일 경우
    cc.resize({
      width: 50,
      height: 70,
    });
  } else {
    //창 가로 크기가 500보다 클 경우
    cc.resize({
      width: 85,
      height: 100,
    });
  }
}

//kkotkkio.tistory.com/52 [KKOTKKIO'S CAVE]

출처: https: displayBillboard();

export { displayBillboard };
