const displayBillboard = () => {
  const study = document.querySelector('#study').innerHTML;
  const reading = document.querySelector('#reading').innerHTML;
  const exercise = document.querySelector('#exercise').innerHTML;
  const walk = document.querySelector('#walk').innerHTML;
  const love = document.querySelector('#love').innerHTML;
  const other = document.querySelector('#other').innerHTML;

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
      onclick: function (d, i) {
        // console.log('onclick', d, i);
      },
      onover: function (d, i) {
        // console.log('onover', d, i);
      },
      onout: function (d, i) {
        // console.log('onout', d, i);
      },
    },
    bindto: '#pieChart',
  });
};

export { displayBillboard };
