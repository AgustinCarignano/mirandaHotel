const form = document.getElementById("availabilityForm");
const modal = document.getElementById("availabilityModal");
const aceptBtn = document.getElementById("modalBtn");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  setTimeout(() => {
    modal?.classList.remove("pageDetailsAvailability__modalContainer-hidden");
  }, 500);
  aceptBtn?.addEventListener("click", () => {
    modal?.classList.add("pageDetailsAvailability__modalContainer-hidden");
  });
});
