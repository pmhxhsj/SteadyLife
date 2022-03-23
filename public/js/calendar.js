import { displayBillboard } from './billboard.js';

let date = new Date();

const renderCalender = () => {
  let viewYear = date.getFullYear();
  let viewMonth = date.getMonth();

  document.querySelector('.year-month').textContent =
    viewMonth >= 9
      ? `${viewYear}-${viewMonth + 1}`
      : `${viewYear}-0${viewMonth + 1}`;

  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  const dates = prevDates.concat(thisDates, nextDates);
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);

  dates.forEach((date, i) => {
    let copyDate = '';

    date < 10 ? (copyDate = '0' + String(date)) : (copyDate = String(date));

    i >= firstDateIndex && i < lastDateIndex + 1
      ? (dates[
          i
        ] = `<div style="position:static; width:calc(100% / 7); height:100px"><div>${date}</div><div class="pieChart" id="pieChart${date}" ></div></div>`)
      : (dates[i] = `<form class="date" name="date"><span></span></form>`);
  });

  document.querySelector('.dates').innerHTML = dates.join('');

  const today = new Date();
  if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
    for (let date of document.querySelectorAll('.this')) {
      if (+date.innerText === today.getDate()) {
        date.classList.add('today');
        break;
      }
    }
  }

  // const dateDate = document.querySelectorAll('.dates .date');
  // dateDate.forEach((v) => {
  //   v.addEventListener('click', (e) => {
  //     document.getElementById(`${v.name}`).submit();
  //   });
  // });
};

renderCalender();
displayBillboard();
document.querySelector('.go-prev').addEventListener('click', (e) => {
  date.setMonth(date.getMonth() - 1);
  renderCalender();
  displayBillboard();
});

document.querySelector('.go-next').addEventListener('click', (e) => {
  date.setMonth(date.getMonth() + 1);
  renderCalender();
  displayBillboard();
});

const goToday = () => {
  date = new Date();
  renderCalender();
};
