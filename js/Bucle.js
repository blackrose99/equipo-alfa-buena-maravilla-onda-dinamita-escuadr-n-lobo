function animateNav() {
    var miBarra = document.querySelector('.nav');
    var colores = ["red", "green", "blue"];
    var i = 0;

    function changeColor() {
        miBarra.style.boxShadow = "inset 0 0 10px " + colores[i];
        let x = 0;
        
        do {
            i = (i + 1) % colores.length;
            x++
        } while (x < 1);
        x = 0;

        if (i < colores.length) {
            setTimeout(changeColor, 1000); // Llamada recursiva cada segundo
        }
    }
    changeColor(); // Iniciar la animación


}

animateNav();
