var contactForm = document.getElementById("contactForm");
var contactModal = document.getElementById("contactModal");
var contactAceptBtn = document.getElementById("contactBtn");
contactForm === null || contactForm === void 0 ? void 0 : contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var inputs = contactForm.querySelectorAll("input");
    var textArea = contactForm.querySelector("textarea");
    setTimeout(function () {
        contactModal === null || contactModal === void 0 ? void 0 : contactModal.classList.remove("pageDetailsAvailability__modalContainer-hidden");
        inputs.forEach(function (item) {
            if (item.type !== "submit")
                item.value = "";
        });
        if (textArea)
            textArea.value = "";
    }, 500);
    contactAceptBtn === null || contactAceptBtn === void 0 ? void 0 : contactAceptBtn.addEventListener("click", function () {
        contactModal === null || contactModal === void 0 ? void 0 : contactModal.classList.add("pageDetailsAvailability__modalContainer-hidden");
    });
});
