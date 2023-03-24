const swiperRoom = new Swiper(".swiper", {
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
      allowTouchMove: false,
      loop: false,
      // watchOverflow: true,
      // watchSlidesProgress: true,
      // virtualTranslate: true,
    },
  },
});
const swiperFoodMenues = new Swiper(".swiperFoodMenu", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  //slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: ".swiperFoodMenu-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiperFoodMenu-button-next",
    prevEl: ".swiperFoodMenu-button-prev",
  },

  breakpoints: {
    1000: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

const swiperFacilities = new Swiper(".swiperFacility", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiperFacility-pagination",
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

const swiperMenuOptions = new Swiper(".swiperMenuOption", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiperMenuOption-pagination",
  },

  breakpoints: {
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
      enabled: false,
    },
  },
});

const foodOptions = [];
for (let i = 1; i < 16; i++) {
  foodOptions.push(document.getElementById(`menuOption${i}`));
}

foodOptions.forEach((el) => {
  el.onclick = () => {
    const { path } = el.dataset;
    const newSlides = [
      `<div class="swiper-slide"><img class="menu__options__individualSlider-img" src="./public/images/foodsMenu/${path}1.webp" alt="" /></div>`,
      `<div class="swiper-slide"><img class="menu__options__individualSlider-img" src="./public/images/foodsMenu/${path}2.webp" alt="" /></div>`,
      `<div class="swiper-slide"><img class="menu__options__individualSlider-img" src="./public/images/foodsMenu/${path}3.webp" alt="" /></div>`,
    ];
    showSelectedMenu(el.id);
    swiperMenuOptions.removeAllSlides();
    swiperMenuOptions.appendSlide(newSlides);
  };
});

const showSelectedMenu = (id) => {
  foodOptions.forEach((el) => {
    if (el.id === id) {
      el.classList.add("menu__options-activeOption");
    } else {
      el.classList.remove("menu__options-activeOption");
    }
  });
};
