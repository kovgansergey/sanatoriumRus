"use strict";

// инверсия цветов формы брони для index
if (document.location.pathname === '/') {
  document.querySelector('.booking-form-container').classList.add('booking-form-container--invert');
}

// скрипт бургер-меню на мобильных экранах
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

// скрипт для дат в форме брони путевки и в модальном окне Онлайн бронирования
try {
  const bookingFormArrival = document.getElementById('booking-form-arrival'),
    bookingFormDeparture = document.getElementById('booking-form-departure'),
    bookingOnlineFormArrival = document.getElementById('booking-online-form-arrival'),
    bookingOnlineFormDeparture = document.getElementById('booking-online-form-departure'),
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
  bookingOnlineFormArrival.value = `${today.getFullYear()}-${checkNum(today.getMonth() + 1)}-${checkNum(today.getDate())}`;
  bookingOnlineFormArrival.min = `${today.getFullYear()}-${checkNum(today.getMonth() + 1)}-${checkNum(today.getDate())}`;
  bookingOnlineFormDeparture.value = `${tomorrow.getFullYear()}-${checkNum(tomorrow.getMonth() + 1)}-${checkNum(tomorrow.getDate())}`;
  bookingOnlineFormDeparture.min = `${tomorrow.getFullYear()}-${checkNum(tomorrow.getMonth() + 1)}-${checkNum(tomorrow.getDate())}`;

  // функция изменения мин.даты выезда при изменении даты заезда
  const changeDatesBooking = function(event) {
    const newDate = new Date(event.target.value),
      minDate = new Date(bookingFormArrival.min);
    tomorrow.setTime(newDate.getTime() + 86400000);
      
    if (newDate.getTime() < minDate.getTime()) {return;}

    bookingFormDeparture.min = `${tomorrow.getFullYear()}-${checkNum(tomorrow.getMonth() + 1)}-${checkNum(tomorrow.getDate())}`;
    if (bookingFormDeparture.value < bookingFormDeparture.min) {
      bookingFormDeparture.value = bookingFormDeparture.min;
    }
  };

  const changeDatesBookingOnline = function (event) {
    const newDate = new Date(event.target.value),
      minDate = new Date(bookingOnlineFormArrival.min);
    tomorrow.setTime(newDate.getTime() + 86400000);

    if (newDate.getTime() < minDate.getTime()) {
      return;
    }

    bookingOnlineFormDeparture.min = `${tomorrow.getFullYear()}-${checkNum(tomorrow.getMonth() + 1)}-${checkNum(tomorrow.getDate())}`;
    if (bookingOnlineFormDeparture.value < bookingOnlineFormDeparture.min) {
      bookingOnlineFormDeparture.value = bookingOnlineFormDeparture.min;
    }
  };

  bookingFormArrival.addEventListener('input', changeDatesBooking);
  bookingOnlineFormArrival.addEventListener('input', changeDatesBookingOnline);
} catch (error) {
  console.error(error);
}

// модальное окно Калькулятора путевки
try {
  const headerCalculator = document.querySelector('.header-calculator'),
    calculatorPopup = document.querySelector('.calculator-popup'),
    dateArrival = calculatorPopup.querySelector('.dateArrival');

  const checkNum = function (number) {
    return number <= 9 ? '0' + number : number;
  };

  headerCalculator.addEventListener('click', (event) => {
    event.preventDefault();
    const today = new Date();
    dateArrival.min = `${today.getFullYear()}-${checkNum(today.getMonth() + 1)}-${checkNum(today.getDate())}`;
    calculatorPopup.classList.add('active');
    document.body.style.overflow = "hidden";
  });

  calculatorPopup.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.closest('.calculator-dialog')) {
      calculatorPopup.classList.remove('active');
      document.body.style.overflow = "";
    }
  });
} catch (error) {
  
}

// модальное окно Онлайн бронирования
try {
  const headerBooking = document.querySelector('.header-booking'),
    bookingOnlinePopup = document.querySelector('.booking-online-popup');

  headerBooking.addEventListener('click', (event) => {
    event.preventDefault();
    bookingOnlinePopup.classList.add('active');
    document.body.style.overflow = "hidden";
  });

  bookingOnlinePopup.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.closest('.booking-online-dialog')) {
      bookingOnlinePopup.classList.remove('active');
      document.body.style.overflow = "";
    }
  });
} catch (error) {
  
}

// закрытие окна благодарности
try {
  const thanksBtn = document.querySelector('.thanks-btn');
  thanksBtn.addEventListener('click', () => {
    thanksBtn.closest('.thanks-popup').classList.remove('active');
  });
} catch (error) {
  
}

// слайдер с предложениями на главной странице
try {
  var indexOfferSlider = new Swiper('.index-offer__slider', {
    navigation: {
      nextEl: '.slider-arrow-next',
      prevEl: '.slider-arrow-prev',
    },
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
      992: {
        spaceBetween: 24
      },
      1441: {
        spaceBetween: 31
      }
    },
  });
} catch (error) {
  
}

// слайдер на странице Номера
try {
  var discountsMainSlider = new Swiper('.numbers__slider', {
    navigation: {
      nextEl: '.slider-arrow-next',
      prevEl: '.slider-arrow-prev',
    },
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
      992: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 24
      },
      1441: {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 31
      }
    },
  });
} catch (error) {

}

// слайдеры на странице Номера разворот
try {
  var numbersInDetailBigSlider = new Swiper('.numbersInDetail-main__gallery-bigSlider');
  var numbersInDetailSmallSlider = new Swiper('.numbersInDetail-main__gallery-smallSlider', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  numbersInDetailSmallSlider.on('slideChange', () => {
    numbersInDetailBigSlider.slideTo(numbersInDetailSmallSlider.realIndex);
  });
} catch (error) {
  
}

// слайдер с номерами на странице Номера разворот
try {
  var numbersInDetailSlider = new Swiper('.numbersInDetail-numbers__slider', {
    navigation: {
      nextEl: '.slider-arrow-next',
      prevEl: '.slider-arrow-prev',
    },
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
      992: {
        spaceBetween: 24
      },
      1441: {
        spaceBetween: 31
      }
    },
  });
} catch (error) {
  
}

// слайдер на странице Акции
try {
  var discountsMainSlider = new Swiper('.discounts-main__slider', {
    navigation: {
        nextEl: '.slider-arrow-next',
        prevEl: '.slider-arrow-prev',
      },
      slidesPerView: 'auto',
      spaceBetween: 20,
      breakpoints: {
        992: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 24
        },
        1441: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 31
        }
      },
  });
} catch (error) {
  
}

// слайдер галереи на странице О нас
try {
  var aboutUsGallerySlider = new Swiper('.aboutUs-gallery__slider', {
    slidesPerView: 'auto',
    spaceBetween: 12,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        slidesPerColumn: 2,
      }
    },
  });
} catch (error) {

}

// слайдер с дипломами на странице О нас
try {
  var aboutUsAwardsSlider = new Swiper('.aboutUs-awards__slider', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 15,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      992: {
        spaceBetween: 45,
      },
    },
  });
} catch (error) {
  
}

// слайдеры на странице Услуги
try {
  var servicesSlider = new Swiper('.services-main__block-slider', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.slider-pagination',
      clickable: true,
      bulletClass: 'slider-pagination-bullet',
      bulletActiveClass: 'slider-pagination-bullet-active',
    },
  });
} catch (error) {
  
}

// слайдер галереи на странице Услуги
try {
  var aboutUsGallerySlider = new Swiper('.services-infrastructure__slider', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 12,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
} catch (error) {

}

// слайдеры Фотогалереи
try {
  const galleryBigSliderPopup = document.querySelector('.gallery-big-slider-popup');

  var gallerySmall = new Swiper('.gallery-small-slider', {
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 15,
    slidesPerGroup: 2,
    pagination: {
      el: '.slider-pagination-numbers',
      bulletClass: 'slider-pagination-numbers-bullet',
      bulletActiveClass: 'slider-pagination-numbers-bullet-active',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },
    breakpoints: {
      577: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      }
    },
  });

  var galleryBig = new Swiper('.gallery-big-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  gallerySmall.on('click', (event) => {
    const index = event.clickedIndex;
    if (typeof index === 'number') {
      galleryBig.slideTo(index, 0);
      galleryBigSliderPopup.classList.add('active');
    }
  });

  galleryBigSliderPopup.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.closest('.gallery-big-slider-dialog') || target.classList.contains('gallery-big-slider-popup__close')) {
      galleryBigSliderPopup.classList.remove('active');
    }
  });
} catch (error) {
  
}

// слайдер на странице Отзывы
try {
  var commentsSlider = new Swiper('.comments-main__slider', {
    slidesPerColumn: 4,
    spaceBetween: 50,
    pagination: {
      el: '.slider-pagination-numbers',
      bulletClass: 'slider-pagination-numbers-bullet',
      bulletActiveClass: 'slider-pagination-numbers-bullet-active',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },
  });
} catch (error) {
  
}

// модальное окно добавить отзыв на странице Отзывы
try {
  const commentsPopup = document.querySelector('.comments-main__popup'),
    newCommentBtn = document.querySelector('.comments-main__new-comment-btn');

  const closePopup = function(event) {
    const target = event.target;

    if (target.classList.contains('comments-main__popup-close')) {
      commentsPopup.classList.remove('active');
      commentsPopup.removeEventListener('click', closePopup);
    }
  };

  newCommentBtn.addEventListener('click', (event) => {
    event.preventDefault();
    commentsPopup.classList.add('active');
    commentsPopup.addEventListener('click', closePopup);
  });
} catch (error) {
  
}

// маска телефона в инпутах формы
try {
  $('input[type=tel]').mask('+7 (000) 000-0000');
} catch (error) {
  
}

// валидация формы Остались вопросы
try {
  $('.questions-form-validate').validate({
    rules: {
      userName: "required",
      userPhone: {
        required: true,
        minlength: 17
      }
    },
    messages: {
      userName: 'Введите имя',
      userPhone: {
        required: 'Введите телефон',
        minlength: 'Не корректный номер'
      }
    },
    errorClass: 'form-error-message',
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "путь к файлу для отправки формы",
        data: $(form).serialize(),
        success: function () {
          document.querySelector('.thanks-popup').classList.add('active');
          $(form)[0].reset();
        },
        error: function (response) {
          console.error(response);
        }
      });
    }
  });
} catch (error) {
  
}

// валидация формы Оставить отзыв
try {
  $('.comments-form').validate({
    rules: {
      userName: "required",
      userTown: "required",
      userComment: "required",
      userEmail: {
        required: true,
        email: true,
      }
    },
    messages: {
      userName: "Введите имя",
      userTown: "Введите город",
      userComment: "Напишите пару слов",
      userEmail: {
        required: "Введите email",
        email: "Не корректный email",
      }
    },
    errorClass: 'form-error-message',
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "путь к файлу для отправки формы",
        data: $(form).serialize(),
        success: function () {
          document.querySelector('.thanks-popup').classList.add('active');
          $(form)[0].reset();
          $(form)[0].closest('.comments-main__popup').classList.remove('active');
        },
        error: function (response) {
          console.error(response);
        }
      });
    }
  });
} catch (error) {
  
}

// валидация формы Калькулятор путевки
try {
  $('.calculator-form').validate({
    rules: {
      userName: "required",
      userPhone: {
        required: true,
        minlength: 17
      },
      quantityGuests: "required",
      quantityDays: "required",
      dateArrival: "required",
    },
    messages: {
      userName: "Введите имя",
      userPhone: {
        required: 'Введите телефон',
        minlength: 'Не корректный номер'
      },
      quantityGuests: "Введите количество гостей",
      quantityDays: "Введите количество дней",
      dateArrival: "Введите дату заезда",
    },
    errorClass: 'form-error-message',
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "путь к файлу для отправки формы",
        data: $(form).serialize(),
        success: function () {
          document.querySelector('.thanks-popup').classList.add('active');
          $(form)[0].reset();
        },
        error: function (response) {
          console.error(response);
        }
      });
    }
  });
} catch (error) {
  
}

// карта
try {
  function init() {
    var contactsMap = new ymaps.Map("contactsMap", {
      center: [44.89024418, 37.29920689],
      zoom: 15
    });
    var placemark = new ymaps.Placemark([44.89307757, 37.29956273], {}, {
      preset: "islands#redDotIcon"
    });
    contactsMap.geoObjects.add(placemark);
  }

  ymaps.ready(init);
} catch (error) {
  
}