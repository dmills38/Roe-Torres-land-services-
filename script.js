document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll(".services li");

    services.forEach(service => {
        service.addEventListener("click", () => {

            const isActive = service.classList.contains("active");

            // close all
            services.forEach(item => {
                item.classList.remove("active");
            });

            // only open if it wasn't already open
            if (!isActive) {
                service.classList.add("active");
            }
        });
    });
});