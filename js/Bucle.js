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


document.addEventListener('DOMContentLoaded', function(){
    var configBtn = document.querySelector('.config-btn');
    var menuTamano = document.getElementById('menuTamanio');
    var menuLetra = document.getElementById('menuTipoLetra');
    var titulo = document.getElementById('titulo');

    configBtn.addEventListener('click', function(){
        if (menuTamano.style.display === 'block') {
            menuTamano.style.display = 'none';
            menuLetra.style.display = 'none';
        } else {
            menuTamano.style.display = 'block';
            menuLetra.style.display = 'block';
        }
    });

    menuTamano.addEventListener('change', function(){
        var tamanioSeleccionado = document.querySelector('input[name="tamanio"]:checked').value;
        document.body.style.fontSize = tamanioSeleccionado;
    });

    menuLetra.addEventListener('change', function(){
        var tipoLetraSeleccionado = '';
        var checkboxes = document.querySelectorAll('input[name="tipoLetra"]:checked');
        checkboxes.forEach(function(checkbox){
            tipoLetraSeleccionado += checkbox.value + ',';
        });
        document.body.style.fontFamily = tipoLetraSeleccionado.slice(0, -1);
        titulo.style.fontFamily = tipoLetraSeleccionado.slice(0, -1);
    });
})