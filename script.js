document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll(".services li");

    services.forEach(service => {
        service.addEventListener("click", () => {

            // close all others
            services.forEach(item => {
                if (item !== service) {
                    item.classList.remove("active");
                }
            });

            // toggle current
            service.classList.toggle("active");
        });
    });
});