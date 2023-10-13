
document.addEventListener('DOMContentLoaded', function(){
    const imagenes = document.querySelectorAll('.image img');

    imagenes.forEach(function(image){
        image.addEventListener('mouseover', function(){
            image.style.transform = 'scale(1.1)';
            image.style.zIndex = '1';
        });

        image.addEventListener('mouseout', function(){
            image.style.transform = 'scale(1)';
            image.style.zIndex = '0';
        });

    });
});

