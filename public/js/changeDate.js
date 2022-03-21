const changeCorrectDate = () => {
  const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  document.querySelector('#yesterday-btn').addEventListener('click', (e) => {
    const date = document.querySelector('#datepicker');
    const value = document.querySelector('#datepicker').value;

    if (+value.slice(8) === 1) {
      const thisMonth = +value.substring(5, 7);
      let beforeMonth;
      if (thisMonth === 1) {
        beforeMonth = 12;
      } else {
        beforeMonth = thisMonth - 1;
      }
      beforeMonth = String(beforeMonth);

      if (beforeMonth.length !== 2) {
        beforeMonth = '0' + beforeMonth;
      }
      const days = month[beforeMonth - 1];

      date.value = `2022-${beforeMonth}-${days}`;
    } else {
      const thisMonth = value.substring(5, 7);
      let days = String(+value.slice(8) - 1);

      if (days.length !== 2) {
        days = '0' + days;
      }

      date.value = `2022-${thisMonth}-${days}`;
    }

    document.getDate.submit();
  });

  document.querySelector('#nextday-btn').addEventListener('click', (e) => {
    const date = document.querySelector('#datepicker');
    const value = document.querySelector('#datepicker').value;

    if (+value.slice(8) === month[+value.substring(5, 7) - 1]) {
      const thisMonth = +value.substring(5, 7);
      let nextMonth;

      if (thisMonth === 12) {
        nextMonth = 1;
      } else {
        nextMonth = thisMonth + 1;
      }

      nextMonth = String(nextMonth);

      if (nextMonth.length !== 2) {
        nextMonth = '0' + nextMonth;
      }

      date.value = `2022-${nextMonth}-01`;
    } else {
      const thisMonth = value.substring(5, 7);
      let days = String(+value.slice(8) + 1);

      if (days.length !== 2) {
        days = '0' + days;
      }

      date.value = `2022-${thisMonth}-${days}`;
    }

    document.getDate.submit();
  });
};

export default changeCorrectDate;
