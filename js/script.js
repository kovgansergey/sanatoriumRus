"use strict";

// скрипт изменения бургер-меню на мобильных экранах
try {
  const menu = document.querySelector('.menu'),
    menuBurger = document.querySelector('.menu-burger');

  const toggleMenu = function() {
    menu.classList.toggle('active');
    menuBurger.classList.toggle('active');
  };

  menuBurger.addEventListener('click', toggleMenu);
} catch (error) {
  console.error(error);
}

// скрипт для дат в форме брони путевки
try {
  const bookingFormArrival = document.getElementById('booking-form-arrival'),
    bookingFormDeparture = document.getElementById('booking-form-departure'),
    today = new Date(),
    tomorrow = new Date(today.getTime() + 86400000);

  const checkNum = function(number) {
    return number <= 9 ? '0' + number : number;
  };

  // присвоение инпутам значений и мин.значений сегодняшнего и следующего дней соответственно
  bookingFormArrival.value = `${today.getFullYear()}-${checkNum(today.getMonth() + 1)}-${checkNum(today.getDate())}`;
  bookingFormArrival.min = `${today.getFullYear()}-${checkNum(today.getMonth() + 1)}-${checkNum(today.getDate())}`;
  bookingFormDeparture.value = `${tomorrow.getFullYear()}-${checkNum(tomorrow.getMonth() + 1)}-${checkNum(tomorrow.getDate())}`;
  bookingFormDeparture.min = `${tomorrow.getFullYear()}-${checkNum(tomorrow.getMonth() + 1)}-${checkNum(tomorrow.getDate())}`;

  // функция изменения мин.даты выезда при изменении даты заезда
  const changeDates = function(event) {
    const newDate = new Date(event.target.value),
      minDate = new Date(bookingFormArrival.min);
    tomorrow.setTime(newDate.getTime() + 86400000);
      
    if (newDate.getTime() < minDate.getTime()) {return;}

    bookingFormDeparture.min = `${tomorrow.getFullYear()}-${checkNum(tomorrow.getMonth() + 1)}-${checkNum(tomorrow.getDate())}`;
    if (bookingFormDeparture.value < bookingFormDeparture.min) {
      bookingFormDeparture.value = bookingFormDeparture.min;
    }
  };

  bookingFormArrival.addEventListener('input', changeDates);
} catch (error) {
  console.error(error);
}