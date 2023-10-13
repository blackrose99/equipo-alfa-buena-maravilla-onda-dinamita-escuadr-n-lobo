document.addEventListener("DOMContentLoaded", function(){
    var btnEnviar = document.getElementById("btn-form");

    btnEnviar.addEventListener("click", function (){
        var nombre = document.getElementById("nombre").value.trim();
        var email = document.getElementById("email").value.trim();
        var mensaje = document.getElementById("mensaje").value.trim();

        if(nombre === "" || email === "" || mensaje === ""){
            alert("Por favor, rellene todos los campos.");
        } else {
            alert("Datos enviados correctamente");
            window.location.href = "uts.html";
        }
    });
});