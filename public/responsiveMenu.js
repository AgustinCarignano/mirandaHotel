const navBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileNavbar");
navBtn.onclick = () => {
  if (mobileMenu.classList.contains("initialHidden")) {
    mobileMenu.classList.remove("initialHidden");
  }
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("visible");
  if (navBtn.classList.contains("open")) {
    navBtn.classList.remove("open");
    navBtn.classList.add("close");
  } else {
    navBtn.classList.add("open");
    navBtn.classList.remove("close");
  }
};

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 200) {
    navbar.classList.remove("topPageBehavior");
    navbar.classList.add("slideUpMenu");
  } else {
    navbar.classList.add("topPageBehavior");
    navbar.classList.remove("slideUpMenu");
  }
});

document.addEventListener("mouseover", (e) => {
  if (e.y < 100 && window.scrollY > 200) {
    navbar.classList.remove("slideUpMenu");
  } else if (e.y > 100 && window.scrollY > 200) {
    navbar.classList.add("slideUpMenu");
  }
});
