document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.image img');

    imagenes.forEach(function(image) {
        image.addEventListener('mouseover', function() {
            image.style.transform = 'scale(1.1)';
            image.style.zIndex = '1';
        });

        image.addEventListener('mouseout', function() {
            image.style.transform = 'scale(1)';
            image.style.zIndex = '0';
        });
    });

    var btnEnviar = document.getElementById("btn-form");
    var btnRegresar = document.getElementById("btn-regresar");

    btnEnviar.addEventListener("click", function () {
        var nombre = document.getElementById("nombre").value.trim();
        var email = document.getElementById("email").value.trim();
        var mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor, rellene todos los campos.");
        } else {
            alert("Datos enviados correctamente");
            window.location.href = "uts.html";
        }
    });

    // Agregado: Redirigir al hacer clic en el botón de "Regresar"
    btnRegresar.addEventListener("click", function () {
        window.location.href = "uts.html";
    });
});