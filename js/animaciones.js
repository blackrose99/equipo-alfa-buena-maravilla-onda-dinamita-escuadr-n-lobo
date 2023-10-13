document.addEventListener('DOMContentLoaded', function() {

    //punto 3
    const imagenes = document.querySelectorAll('.image img');

    imagenes.forEach(function(image) {
        image.addEventListener('mouseover', function() {
            image.style.transform = 'scale(1.1)';
            image.style.zIndex = '1';
        });

        image.addEventListener('mouseout', function() {
            image.classList.add("transicion")
            image.style.transform = 'scale(1)';
            image.style.zIndex = '0';
        });
    });

    //ounto 1
    const images1 = document.getElementById("imagen1");
    const images2 = document.getElementById("imagen2");
    const images3 =document.getElementById("imagen3");
    const images4 = document.getElementById("imagen4")

    images1.addEventListener("click", function(){
        alert("Entrada principal");
    })
    
    images2.addEventListener("click", function(){
        alert("Nuestro rector");
    })

    images3.addEventListener("click", function(){
        alert("nuetras unidades")
    })

    images4.addEventListener("click", function(){
        alert("nuestra bandera")
    })

});