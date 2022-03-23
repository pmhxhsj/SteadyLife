const displayBillboard = () => {
  const study = document.querySelector('#study').innerHTML;
  const reading = document.querySelector('#reading').innerHTML;
  const exercise = document.querySelector('#exercise').innerHTML;
  const walk = document.querySelector('#walk').innerHTML;
  const love = document.querySelector('#love').innerHTML;
  const other = document.querySelector('#other').innerHTML;

  const chartArr = document.querySelectorAll('.pieChart');

  chartArr.forEach((v) => {
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
        labels: { show: true, colors: 'black', centered: true },
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
      공부: '#3e95cd',
      독서: '#8e5ea2',
      운동: '#3cba9f',
      산책: '#e8c3b9',
      데이트: '#c45850',
      기타: '#000000',
    });

    chart.resize({
      width: 85,
      height: 100,
    });
  });
};

const displayDetailBillboard = () => {
  const study = document.querySelector('#study').innerHTML;
  const reading = document.querySelector('#reading').innerHTML;
  const exercise = document.querySelector('#exercise').innerHTML;
  const walk = document.querySelector('#walk').innerHTML;
  const love = document.querySelector('#love').innerHTML;
  const other = document.querySelector('#other').innerHTML;

  const chart = bb.generate({
    data: {
      labels: true,
      columns: [
        ['공부', study],
        ['독서', reading],
        ['운동', exercise],
        ['산책', walk],
        ['데이트', love],
        ['기타', other],
      ],
      type: 'pie',
    },
    pie: {
      label: {
        show: false,
      },
    },
    bindto: `#pieChart`,
  });

  chart.data.colors({
    공부: '#3e95cd',
    독서: '#8e5ea2',
    운동: '#3cba9f',
    산책: '#e8c3b9',
    데이트: '#c45850',
    기타: '#000000',
  });
};

export { displayBillboard, displayDetailBillboard };
