const swiper = new Swiper(".swiper", {
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

  breakpoints: {
    1000: {
      enabled: false,
      slidesPerView: 3,
      spaceBetween: 30,
      // watchOverflow: true,
      // watchSlidesProgress: true,
      // virtualTranslate: true,
    },
  },

  // And if we need scrollbar
  /* scrollbar: {
    el: ".swiper-scrollbar",
  }, */
});

const swiperAboutFacility = new Swiper(".swiperAboutFacility", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiperAboutFacility-pagination",
  },

  breakpoints: {
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: "row",
      },
      enabled: false,
    },
  },
});

const swiperAboutCounter = new Swiper(".pageAboutCounter-swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".pageAboutCounter-swiper-pagination",
  },

  breakpoints: {
    1000: {
      enabled: false,
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

const swiperDetailRelated = new Swiper(".swiperPageDetail", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1000: {
      enabled: false,
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
