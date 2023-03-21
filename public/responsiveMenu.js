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

/* const navbar = document.getElementById("navbar");
const disparador = document.getElementById("disparador");
document.addEventListener("mouseover", (e) => {
  if (e.y < 130 && window.scrollY > 450) {
    navbar.classList.add("scrollNavbar");
  }
  if (e.y > 130 && navbar.classList.contains("scrollNavbar")) {
    navbar.classList.remove("scrollNavbar");
  }
}); */
