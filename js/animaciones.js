document.addEventListener('DOMContentLoaded', function() {

<<<<<<< HEAD
    //punto 3
=======

























document.addEventListener('DOMContentLoaded', function(){
>>>>>>> 1152a21fcc7d232fc31601dd7bebc005dc27e916
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

<<<<<<< HEAD
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
=======





document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image img');

    images.forEach(function(image) {
        image.addEventListener('click', function() {
            setInterval(cambiarColores, 2000);
        });
    });

    function cambiarColores() {
      
        const colorFondo = getRandomColor();
        const colorTexto = getRandomColor();

     
        document.body.style.backgroundColor = colorFondo;
        document.body.style.color = colorTexto;
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
>>>>>>> 1152a21fcc7d232fc31601dd7bebc005dc27e916
