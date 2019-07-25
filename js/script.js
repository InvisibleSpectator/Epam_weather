"use strict";
const week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четвег", "Пятница", "Суббота"];
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
var shift = 0;
var today = new Date;
var t = new Date(1563739200000);
today.setHours(0, 0, 0, 0);

var cloud = document.createElementNS('http://www.w3.org/2000/svg', 'path');
cloud.setAttribute('fill', "url(#a)");
cloud.setAttribute('d', "M7 14c-2.209 0-4-1.791-4-4s1.791-4 4-4c.417 0 .818.064 1.196.182.563-1.842 2.277-3.182 4.304-3.182 2.485 0 4.5 2.015 4.5 4.5 0 .235-.018.465-.053.69.328-.123.682-.19 1.053-.19 1.657 0 3 1.343 3 3s-1.343 3-3 3h-11z");

var rain = document.createElementNS('http://www.w3.org/2000/svg', 'path');
rain.setAttribute('fill', "#66AFEB");
rain.setAttribute('fill-rule', "nonzero");
rain.setAttribute('d', "M7.109 16.463l-1.05 2.499c-.16.382.019.822.401.982.382.16.822-.019.982-.401l1.05-2.499c.16-.382-.019-.822-.401-.982-.382-.16-.822.019-.982.401zm4 0l-1.05 2.499c-.16.382.019.822.401.982.382.16.822-.019.982-.401l1.05-2.499c.16-.382-.019-.822-.401-.982-.382-.16-.822.019-.982.401z");


var snow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
snow.setAttribute('fill', "#67C8E2");
snow.setAttribute('fill-rule', "nonzero");
snow.setAttribute('d', "M16.125 18.417l.682-.394c.722-.417 1.347.666.625 1.083l-.682.394.682.394c.722.417.097 1.499-.625 1.083l-.682-.394v.787c0 .345-.28.625-.625.625s-.625-.28-.625-.625v-.787l-.682.394c-.722.417-1.347-.666-.625-1.083l.682-.394-.682-.394c-.722-.417-.097-1.499.625-1.083l.682.394v-.787c0-.345.28-.625.625-.625s.625.28.625.625v.787z");

var sun = document.createElementNS('http://www.w3.org/2000/svg', 'path');
sun.setAttribute('fill', "#FFB300");
sun.setAttribute('fill-rule', "nonzero");
sun.setAttribute('d', "M16.699 2.603l-1.175 2.837c-.383.924-1.769.35-1.386-.574l1.175-2.837c.383-.924 1.769-.35 1.386.574zm-6.846 16.527l-1.175 2.837c-.383.924-1.769.35-1.386-.574l1.175-2.837c.383-.924 1.769-.35 1.386.574zm12.112-10.449l-2.837 1.175c-.924.383-1.498-1.003-.574-1.386l2.837-1.175c.924-.383 1.498 1.003.574 1.386zm-16.527 6.846l-2.837 1.175c-.924.383-1.498-1.003-.574-1.386l2.837-1.175c.924-.383 1.498 1.003.574 1.386zm15.953 1.176l-2.837-1.175c-.924-.383-.35-1.769.574-1.386l2.837 1.175c.924.383.35 1.769-.574 1.386zm-16.527-6.846l-2.837-1.175c-.924-.383-.35-1.769.574-1.386l2.837 1.175c.924.383.35 1.769-.574 1.386zm3.813-7.829l1.175 2.837c.383.924-1.003 1.498-1.386.574l-1.175-2.837c-.383-.924 1.003-1.498 1.386-.574zm6.846 16.527l1.175 2.837c.383.924-1.003 1.498-1.386.574l-1.175-2.837c-.383-.924 1.003-1.498 1.386-.574z");

var data = [{
    date: 1559419200000,
    temperature: {
      night: 16,
      day: 26,
    },
    cloudiness: 'Ясно',
    snow: false,
    rain: false,
  },
  {
    date: 1563739200000,
    temperature: {
      night: 19,
      day: 29,
    },
    cloudiness: 'Облачно',
    snow: false,
    rain: true,
  },
  {
    date: 1559592000000,
    temperature: {
      night: 12,
      day: 21,
    },
    cloudiness: 'Облачно',
    snow: false,
    rain: false,
  },
  {
    date: 1563825600000,
    temperature: {
      night: 12,
      day: 21,
    },
    cloudiness: 'Облачно',
    snow: false,
    rain: false,
  },
  {
    date: 1559865600000,
    temperature: {
      night: 12,
      day: 21,
    },
    cloudiness: 'Облачно',
    snow: true,
    rain: true,
  },
  {
    date: 1559865600000,
    temperature: {
      night: 12,
      day: 21,
    },
    cloudiness: 'Облачно',
    snow: false,
    rain: false,
  },
];

var picture = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
picture.setAttribute('width', '50');
picture.setAttribute('height', '50');
picture.setAttribute('viewBox', "0 0 24 24");
picture.innerHTML = '<defs><linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#9FC7FF"/><stop offset="100%" stop-color="#9BC1F5"/></linearGradient><radialGradient id="b" cx="55.585%" cy="10.083%" r="58.215%" fx="55.585%" fy="10.083%" gradientTransform="matrix(0 -1 .719 0 .483 .657)"><stop offset="0%" stop-color="#486DA8" stop-opacity=".4"/><stop offset="100%" stop-color="#486DA8" stop-opacity="0"/></radialGradient></defs><g fill="none"></g>';

function drawDays(days) {
  let objDate;
  for (let i = 0; i < days.length; i++) {
    objDate = new Date(days[i].date);
    let weather;
    let day = document.getElementById('day' + i);
    picture.getElementsByTagName('g')[0].innerHTML = '';
    if (isToday(days[i]))
      weather = '<b>Сегодня</b>';
    else
      weather = week[objDate.getDay()];
    weather += '<br>' + objDate.getDate() + ' ' + months[objDate.getMonth()] + '<br>';
    day.innerHTML = weather;
    weather = "<p class='time-of-day day'>Днём ";
    if (days[i].temperature.day > 0) {
      weather += "+" + days[i].temperature.day + '°</p>'
    } else {
      weather += days[i].temperature.day + '°</p>'
    }

    weather += "<p class='time-of-day night'>Ночью ";
    if (days[i].temperature.night > 0) {
      weather += "+" + days[i].temperature.night + '°</p>'
    } else {
      weather += days[i].temperature.night + '°</p>'
    }

    weather += '<p class="rainfall">' + days[i].cloudiness + '<br>';
    if (days[i].cloudiness == 'Ясно') {
      picture.getElementsByTagName('g')[0].innerHTML += '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="5" fill="#FFB300"/>';
      picture.getElementsByTagName('g')[0].appendChild(sun);
    } else if (days[i].cloudiness == 'Облачно') {
      picture.getElementsByTagName('g')[0].appendChild(cloud);
    }

    if (days[i].snow || days[i].rain) {
      if (days[i].snow) {
        picture.getElementsByTagName('g')[0].appendChild(snow);
        weather += 'снег<br>';
      }
      if (days[i].rain) {
        picture.getElementsByTagName('g')[0].appendChild(rain);
        weather += 'дождь<br>';
      }
    } else {
      weather += 'без осадков<br>';
    }

    document.getElementById('day' + i).appendChild(picture);
    day.innerHTML += weather + '</p>';

  }
  if (shift == 0 && document.getElementById('arrow-left').classList.contains('clicable')) {
    document.getElementById('arrow-left').classList.toggle('clicable');
  } else if (!(shift == 0 || document.getElementById('arrow-left').classList.contains('clicable'))) {
    document.getElementById('arrow-left').classList.toggle('clicable');
  }

  if (shift + 4 == data.length && document.getElementById('arrow-right').classList.contains('clicable')) {
    document.getElementById('arrow-right').classList.toggle('clicable');
  } else if (!(shift + 4 == data.length || document.getElementById('arrow-right').classList.contains('clicable'))) {
    document.getElementById('arrow-right').classList.toggle('clicable');
  }
}

function changeDay(arrow) {
  if (arrow.classList.contains('clicable')) {
    var direction = arrow.getAttribute("id");
    if (direction == 'arrow-left') {
      shift--;
      drawDays(data.slice(shift, shift + 4));
    } else {
      {
        shift++;
        drawDays(data.slice(shift, shift + 4));
      }
    }
  }
}

function isToday(day) {
  return today.valueOf() === day.date.valueOf();
}

var todayIndex = data.findIndex(isToday);
if (todayIndex >= 0)
  shift = Math.min(data.length - 4, todayIndex);
document.getElementById('this-day').innerHTML = week[today.getDay()] + ' ' + today.getDate() + ' ' + months[today.getMonth()];
drawDays(data.slice(shift, shift + 4));
