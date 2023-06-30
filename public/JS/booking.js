var form = document.getElementById("availabilityForm");
var modal = document.getElementById("availabilityModal");
var aceptBtn = document.getElementById("modalBtn");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    var inputs = form.querySelectorAll("input");
    var textArea = form.querySelector("textarea");
    setTimeout(function () {
        modal === null || modal === void 0 ? void 0 : modal.classList.remove("pageDetailsAvailability__modalContainer-hidden");
        inputs.forEach(function (item) {
            if (item.type !== "submit")
                item.value = "";
        });
        if (textArea)
            textArea.value = "";
    }, 500);
    aceptBtn === null || aceptBtn === void 0 ? void 0 : aceptBtn.addEventListener("click", function () {
        modal === null || modal === void 0 ? void 0 : modal.classList.add("pageDetailsAvailability__modalContainer-hidden");
    });
});
