const displayBillboard = () => {
  const chartArr = document.querySelectorAll('.pieChart');
  const dateObj = document.querySelector('#dateObj').innerHTML.split(',');
  const calendarWidth = document.querySelector('.main');
  const dataByDate = [];

  while (dateObj.length) {
    dataByDate.push(dateObj.splice(0, 9));
  }

  chartArr.forEach((v) => {
    const value = v.classList[1];
    let isBlank = true;
    let [study, reading, exercise, walk, sleep, love, partTimeJob, other] = [
      0, 0, 0, 0, 0, 0, 0, 0,
    ];

    for (let i = 0; i < dataByDate.length; i++) {
      if (value === dataByDate[i][0]) {
        study = +dataByDate[i][1];
        reading = +dataByDate[i][2];
        exercise = +dataByDate[i][3];
        walk = +dataByDate[i][4];
        sleep = +dataByDate[i][5];
        love = +dataByDate[i][6];
        partTimeJob = +dataByDate[i][7];
        other = +dataByDate[i][8];
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
        options: {
          responsive: false,
        },

        bindto: `#${v.id}`,
      });

      chart.legend.hide();

      chart.data.colors({
        noData: 'rgba(223,212,228, 0.2)',
      });

      chart.resize({
        width: calendarWidth.offsetWidth / 7,
        height: 100,
      });

      return;
    }

    let formatStudy = convertMinutesToHours(study);
    let formatReading = convertMinutesToHours(reading);
    let formatSleep = convertMinutesToHours(sleep);
    let formatExercise = convertMinutesToHours(exercise);
    let formatWalk = convertMinutesToHours(walk);
    let formatPartTimeJob = convertMinutesToHours(partTimeJob);
    let formatLove = convertMinutesToHours(love);
    let formatOther = convertMinutesToHours(other);

    const chart = bb.generate({
      data: {
        columns: [
          ['공부', study],
          ['독서', reading],
          ['수면', sleep],
          [('운동', exercise)],
          ['알바', partTimeJob],
          ['산책', walk],
          ['데이트', love],
          ['기타', other],
        ],
        type: 'pie',
        onclick: function () {
          Swal.fire(`
            공부: ${formatStudy}\n
            독서: ${formatReading}\n
            수면: ${formatSleep}\n
            운동: ${formatExercise}\n
            알바: ${formatPartTimeJob}\n
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
      수면: 'rgba(62,149,205,0.5)',
      운동: 'rgba(251,222,162,0.5)',
      알바: 'rgba(121,222,162,0.5)',
      산책: 'rgba(252,204,212,0.5)',
      데이트: 'rgba(142,182,149,0.5)',
      기타: 'rgba(187, 144, 228, 0.5)',
    });

    chart.resize({
      width: calendarWidth.offsetWidth / 7,
      height: 100,
    });
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

displayBillboard();

export { displayBillboard };
