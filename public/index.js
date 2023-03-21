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

  // And if we need scrollbar
  /* scrollbar: {
    el: ".swiper-scrollbar",
  }, */
});

/* const navBtn = document.getElementById("homeBurgerBtn");
const mobileMenu = document.getElementById("homeMobileNavbar");
navBtn.onclick = () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("visible");
  navBtn.classList.toggle("open");
  navBtn.classList.toggle("close");
}; */

/* class ResponsiveMenu {
  constructor(pageName) {
    this.navBtn = document.getElementById(`${pageName}BurgerBtn`);
    this.mobileMenu = document.getElementById(`${pageName}MobileNavbar`);
    this.navBtn.onclick = () => {
      this.mobileMenu.classList.toggle("hidden");
      this.mobileMenu.classList.toggle("visible");
      this.navBtn.classList.toggle("open");
      this.navBtn.classList.toggle("close");
    };
  }
}

const homeMenu = new ResponsiveMenu("home");
const aboutUsMenu = new ResponsiveMenu("aboutUs");
console.log(aboutUsMenu.navBtn); */
