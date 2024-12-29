const swiper = new Swiper(".main-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
const swiper1 = new Swiper(".popular-product__slider", {
  direction: "horizontal",
  loop: true,

  breakpoints: {
    1212: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1012: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    840: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    450: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    319: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-pagination-first",
    dynamicBullets: true,
    dynamicMainBullets: 1,
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".slider__button-next_first",
    prevEl: ".slider__button-prev_first",
  },
});
const swiper2 = new Swiper(".other-products__slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".slider__button-prev_sec",
    prevEl: ".slider__button-next_sec",
  },
  pagination: {
    el: ".swiper-pagination-sec",
    dynamicBullets: true,
    dynamicMainBullets: 1,
    clickable: true,
  },

  breakpoints: {
    1212: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1012: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    840: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    450: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});
