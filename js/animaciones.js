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