"use strict";

// инверсия цветов формы брони для index
if (document.location.pathname === '/') {
  document.querySelector('.booking-form-container').classList.add('booking-form-container--invert');
}

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
          Swal.fire({
            icon: 'success',
            title: 'Заявка отправлена',
            text: 'Оператор свяжется с Вами в ближайшее время'
          });
          $(form)[0].reset();
        },
        error: function (response) {
          console.error(response);
          Swal.fire({
            icon: 'error',
            title: 'Что-то не так!',
            text: 'Попробуйте еще раз позднее.',
          });
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