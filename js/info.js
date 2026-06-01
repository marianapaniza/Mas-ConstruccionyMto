document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        // Validar que el checkbox de políticas esté marcado (browser lo hace, pero es bueno reforzar)
        const checkbox = document.getElementById("politicas");
        if (!checkbox.checked) {
            alert("Por favor, acepte las políticas de tratamiento de datos.");
            event.preventDefault();
            return;
        }

        // Cambio visual: Botón de envío en estado de carga
        const submitBtn = contactForm.querySelector(".btn-submit");
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
    });
});