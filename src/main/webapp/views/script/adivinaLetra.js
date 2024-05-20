window.onload=function (){
        // Obtener el div donde se agregarán los botones
        let divLetras = document.getElementById("divLetras");

        // Crear un array con todas las letras del alfabeto
        let letras = 'abcdefghijklmnopqrstuvwxyz'.split('');

        // Función para crear botones para cada letra y agregarlos al div
        function crearBotones() {
        letras.forEach(function(letra) {
            var boton = document.createElement("button");
            boton.textContent = letra.toUpperCase(); // Convertir la letra a mayúscula
            boton.value=letra.toUpperCase(); // Agregar el valor de la letra
            boton.classList.add("boton"); // Agregar la clase "boton"
            boton.classList.add("boton-letra"); // Agregar la clase "boton-letra"
            divLetras.appendChild(boton);
            console.log(boton.value)
        });
    }
        // Llamar a la función para crear los botones
        crearBotones();
    //toma todos los elementos que tienen la clase boton-letra y crea un array de botones

    let letraAdivinar=letras[parseInt(Math.random() * 26)].toUpperCase(); //letra[indice]
    console.log(letraAdivinar);
    let botones=document.querySelectorAll(".boton-letra");
    //En JS forEach es una función que se le aplica a un array para recorrerlo
    botones.forEach(letraSeleccionada=> {
    letraSeleccionada.addEventListener("click",function (){
        if (letraSeleccionada.value==letraAdivinar){
            document.querySelector(".resultado").innerHTML="Seleccion correcta, Adivinaste!"

            //falta pregunta si quiere otra partida!!!
        }else{
            document.querySelector(".resultado").innerHTML="Sigue intentandolo!"
            letraSeleccionada.disabled=true;
            letraSeleccionada.style.backgroundColor = "#f2f2f2";
        }

        })


    });
}