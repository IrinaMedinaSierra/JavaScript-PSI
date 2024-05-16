window.onload=function (e){

    document.querySelector(".parrafo").innerHTML = "Es una prueba con selector";
  //  document.write("Es una prueba desde el archivo js externo sin selector"); //no se utiliza mucho....

    /**
     * Para seleccionar elementos...podemos hacerlo por
     * id
     * clase
     * etiqueta
     * name
     * comodin-> querySelector...que incluye todas las anteriores.
     *           querySelectorAll...cuando son varios elementos que necesitamos seleccionar ->array de elementos
     *
     * */
    let cuadro1=document.getElementById("cuadro");
    let cuador2=document.querySelector("#cuadro");
    //indicar que tipo de selector es # para id   . para clases
    let cadena1="mi primer cadena";
    let cadena2=" para mostrar como funciona JS";
    //expresiones backticks sin tener que utilizar el + para concatenar
    document.querySelector(".parrafo").innerHTML=`\tLa Cadena1 dice -> ${cadena1} y la cadena2 dice ${cadena2}`;
    //document.querySelector(".parrafo").innerHTML="La Cadena1 dice ->"+cadena1+" y la cadena2 dice "+cadena2;
    //hacer referencia a una expresión o variable, es tambien hacer referencia a su valor
    let base=3;
    let altura=22;
    document.querySelector(".areaTriangulo").innerHTML=`El área del triángulo es: ${base * altura/2} `;

    //Secuencias de escape \t \n  \\  "es una frase y dentro hay comillas \"dobles\" tienes que escapar...
    console.log("Asi \"escapamos\" comillas dobles"); //dentro hay comillas
    console.log('Asi "escapamos" comillas dobles'); //
    console.log("Asi 'escapamos' comillas dobles");
    console.log("Asi \tTabulamos \t en JavaScript");
    console.log("Asi puedo poner una barra \\ invertida")
    console.log("Asi puedo poner cualquier codigo unicode \u20BF ->Bitcoin");

    //Numeros -> Number //

    let divisionCero=356/0;
    console.log(`La division entre Cero es ${divisionCero}`);
    console.log(cadena1*100); //Not a Number

    //Boolean   true=1   false =0

    console.log(5+true);

    //Conversion de tipos de datos=> Automaticamente hace la conversion de tipo en una operacion, siempre que sea permitido
    console.log(5+"5"); //Resultado -> 55
    console.log(5*"5");//Resultado  -> 25
    console.log(5+Number("5")); //->10

    numero=5+parseFloat("5"); //10 paserFloat convierte un string a numero
    numero=(numero.toFixed(2)); //toFixed formatea los decimales para redondearlos
    console.log(numero);

    //Declaración de Variables en JavaScript
    //let y el var
    //var tiene ambito global, cuidado porque se pueden declarar varias veces..
    //let tiene ambito de bloque, si se declara, ya no es posible volver a declarar en el mismo bloque

    var diametro=5;
    if (diametro<10){
        var diametro=15;
        console.log(diametro); //15
    }
    console.log(diametro); //15

    let metros=50;
    if (metros>10){
        let metros=15;
        console.log(metros);
    }
    console.log(metros);

    //Operadores de Asignacion
    // a=a+b        - > a+=b
    //aplicacion        simplificacion

    //Para calcular el exponenciación
    var a=2**5; //2 exp 5
    console.log("2^5= "+a);
    //Operadores lógicos  || or   && and
    //Operador ternario
    let resultado=a<30?"es menor que 30":"es mayor que treinta";
    console.log(resultado);












}