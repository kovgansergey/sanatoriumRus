"use strict"

// скрипт изменения бургер-меню на мобильных экранах
try {
  const menu = document.querySelector('.menu'),
    menuBurger = document.querySelector('.menu-burger');

  function toggleMenu() {
    menu.classList.toggle('active')
    menuBurger.classList.toggle('active')
  }

  menuBurger.addEventListener('click', toggleMenu);
} catch (error) {
  console.error(error);
}

// скрипт для дат в форме брони путевки
try {
  const bookingFormArrival = document.getElementById('booking-form-arrival'),
    bookingFormDeparture = document.getElementById('booking-form-departure'),
    today = new Date();
    
  console.log(today.toDateString());
} catch (error) {
  console.error(error);
}