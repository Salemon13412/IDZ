const primaryHeader = document.querySelector('.primary-header');
const primaryNavbar = document.querySelector('#primary-navbar');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', () => {
  primaryNavbar.hasAttribute('data-visible') ? hamburgerMenu.setAttribute('aria-expanded', false) : hamburgerMenu.setAttribute('aria-expanded', true);
  primaryNavbar.toggleAttribute('data-visible');
});

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if(y >= primaryHeader.offsetHeight) {
    primaryHeader.setAttribute('data-scrolled', '');
  } else {
    primaryHeader.removeAttribute('data-scrolled');
  }
});

const swiper = new Swiper('.testimonials-slider', {
  spaceBetween: 16,
  pagination: {
    el: '.testimonials-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.testimonials-button-next',
    prevEl: '.testimonials-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: "1",
    },
    568: {
      slidesPerView: "1.6",
    },
    768: {
      slidesPerView: "2.2",
    },
    992: {
      slidesPerView: "2.5",
      spaceBetween: 50
    }
  }
});
