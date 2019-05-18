'use strict';
(function(){
    var botones = document.querySelectorAll("button") //querySelector()
    var display = document.querySelector("input");
    var valor1 = "";
    var valor2 = "";
    var operacion = "";
    var punto_creado = false;

    function suma(a,b){
        return parseFloat(a) + parseFloat(b);
    }

    function resta (a,b){
        return parseFloat(a) - parseFloat(b);
    }
    
    function division (a,b){
        return parseFloat(a) / parseFloat(b);
    }
    function multiplicacion (a,b){
        return parseFloat(a) * parseFloat(b);
    }
    function porcentaje (a,b){
        return parseFloat(a) / (100 * parseFloat(b));
    } 
    
    
    function obtenerDato(evento){
        console.log(evento.target.id);
        if(evento.target.id >= "0" && evento.target.id <= "9"){
            display.value = display.value + evento.target.id;
        }
        if(evento.target.id == "+" || evento.target.id == "-"|| evento.target.id == "x"||
        evento.target.id == "/ " || evento.target.id == "%"){
        punto_creado = false;
        valor1 = display.value;
        operacion = evento.target.id;
        display.value = "";
        }
        if (valor1 == "" && display.value == ""){
            alert('algun numero esta en blanco :(')
        }
        if(evento.target.id == "="){
            if (operacion =='-'){
                alert('esto es una resta')
                valor2 = display.value;
                display.value = resta(valor1,valor2)
            }else if(operacion =='+'){
                alert('esto es una suma')
                valor2 = display.value;
                display.value = suma(valor1,valor2)
            } else if (operacion=='*'){
                alert('esto es una multiplicacion')
                valor2 = display.value;
            }else if (operacion = '/'){;
                valor2 = display.value;
                display.value = division(valor1,valor2)
            }else if (operacion = '%'){
                valor2 = display.value;
                display.value = porcentaje(valor1,valor2)
            }
            
        }
        if(evento.target.id == "." && punto_creado == false){
            display.value = display.value + ".";
            punto_creado = true;
        }
        if(evento.target.id == "ac"){
            display.value = "";
            valor1 = "";
            valor2 = "";
            punto_creado = "";
            operacion = "";
        }
        if(evento.target.id == "s"){
            display.value = (parseFloat(display.value)*-1)
        }

    }
    for(var i=0; i < botones.length; i++ ){
        botones[i].addEventListener("click",obtenerDato);

    }

})();
