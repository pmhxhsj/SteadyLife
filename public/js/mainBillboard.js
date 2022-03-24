const displayDetailBillboard = () => {
  const study = +document.querySelector('#study').innerHTML;
  const reading = +document.querySelector('#reading').innerHTML;
  const exercise = +document.querySelector('#exercise').innerHTML;
  const walk = +document.querySelector('#walk').innerHTML;
  const love = +document.querySelector('#love').innerHTML;
  const other = +document.querySelector('#other').innerHTML;

  if (study + reading + exercise + walk + love + other === 0) {
    const chart = bb.generate({
      data: {
        columns: [['noData', 1]],
        type: 'pie',
      },
      bindto: `#pieChart`,
    });

    chart.data.colors({
      noData: 'rgba(225,225,225,0.5)',
    });

    return;
  }

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
    공부: 'rgb(223,212,228)',
    독서: 'rgba(251,157,167,0.5)',
    운동: 'rgba(251,222,162,0.5)',
    산책: 'rgba(252,204,212,0.5)',
    데이트: 'rgba(142,182,149,0.5)',
    기타: 'rgba(62,149,205,0.5)',
  });
};

displayDetailBillboard();
