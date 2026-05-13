const services = document.querySelectorAll(".services li");

services.forEach(service => {
    service.addEventListener("click", () => {
        service.classList.toggle("active");
    });
});