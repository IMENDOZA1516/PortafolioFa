document.addEventListener("DOMContentLoaded", () => {
    formValidatorInit();
});

function formValidatorInit() {
    const asunto = document.getElementById("asunto");
    const correo = document.getElementById("correo");
    const mensaje = document.getElementById("mensaje");

    const btnenviar = document.getElementById("enviar");

    const contactForm = document.getElementById("contact-form");

    const isEmpty = /^\s*$/gm;
    const isValidEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;


    btnenviar.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        let hasErrors = false;

        if (!isValidEmail.test(correo.value)) {

            alert("Error: el correo no es valido");
            hasErrors = true;
        }

        if (isEmpty.test(asunto.value)) {

            alert("Error: El Asunto es requrido");
            hasErrors = true;
        }


        if (isEmpty.test(mensaje.value)) {

            alert("Error: El Mensaje es requrido");
            hasErrors = true;
        }


        if (!hasErrors) {

            contactForm.submit();

        }

    });
}