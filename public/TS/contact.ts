const contactForm = document.getElementById("contactForm");
const contactModal = document.getElementById("contactModal");
const contactAceptBtn = document.getElementById("contactBtn");

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = contactForm.querySelectorAll("input");
  const textArea = contactForm.querySelector("textarea");
  setTimeout(() => {
    contactModal?.classList.remove(
      "pageDetailsAvailability__modalContainer-hidden"
    );
    inputs.forEach((item) => {
      if (item.type !== "submit") item.value = "";
    });
    if (textArea) textArea.value = "";
  }, 500);
  contactAceptBtn?.addEventListener("click", () => {
    contactModal?.classList.add(
      "pageDetailsAvailability__modalContainer-hidden"
    );
  });
});
