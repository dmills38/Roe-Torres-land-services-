const services = document.querySelectorAll(".services li");

services.forEach(service => {
    service.addEventListener("click", () => {

        // close all other services first
        services.forEach(item => {
            if (item !== service) {
                item.classList.remove("active");
            }
        });

        // toggle clicked service
        service.classList.toggle("active");
    });
});