const form = document.getElementById("availabilityForm");
const modal = document.getElementById("availabilityModal");
const aceptBtn = document.getElementById("modalBtn");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = form.querySelectorAll("input");
  const textArea = form.querySelector("textarea");
  setTimeout(() => {
    modal?.classList.remove("pageDetailsAvailability__modalContainer-hidden");
    inputs.forEach((item) => {
      if (item.type !== "submit") item.value = "";
    });
    if (textArea) textArea.value = "";
  }, 500);
  aceptBtn?.addEventListener("click", () => {
    modal?.classList.add("pageDetailsAvailability__modalContainer-hidden");
  });
});
