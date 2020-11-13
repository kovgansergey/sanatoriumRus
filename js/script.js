"use strict"

// функция изменения бургер-меню на мобильных экранах
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

