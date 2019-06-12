'use strict'

// 5. Realizar una calculadora básica teniendo en cuanta los operadores básicos (suma, resta, división y multiplicación).
// Deberán utilizar HTML, CSS y JavaScript para la misma.

// Ejemplo:
//     Tener en cuenta que sucede si el usuario ingresa un 0 cuando quiere generar la división. Se deberá dar una respuesta en cada caso.

var pantalla = document.getElementById("pantalla");
var botonCero = document.getElementById("btn_0");
var botonUno = document.getElementById("btn_1");
var botonDos = document.getElementById("btn_2");
var botonTres = document.getElementById("btn_3");
var botonCuatro = document.getElementById("btn_4");
var botonCinco = document.getElementById("btn_5");
var botonSeis = document.getElementById("btn_6");
var botonSiete = document.getElementById("btn_7");
var botonOcho = document.getElementById("btn_8");
var botonNueve = document.getElementById("btn_9");
var botonSuma = document.getElementById("btn_adicion");
var botonResta = document.getElementById("btn_sustraccion");
var botonProducto = document.getElementById("btn_multiplicacion");
var botonDivision = document.getElementById("btn_division");
var botonIgual = document.getElementById("btn_igualdad");
var botonPunto = document.getElementById("btn_punto");
var botonRetroceder = document.getElementById("btn_borrado");
var botonLimpieza = document.getElementById("btn_limpieza");
var botonPoder = document.getElementById("btn_poder");

/* Elementos que interVienen en una de las operaciones basicas */
var primerNumero;
var operacion;
var segundoNumero;

var hayUnResultadoEnPantalla = false; 

botonPoder.onclick = function(){
    if(botonPoder.style.color == "red"){
        pantalla.style.background = "darkseagreen"; //Apaga la pantalla.
        botonCero.disabled = true;
        botonUno.disabled = true;
        botonDos.disabled = true;
        botonTres.disabled = true;
        botonCuatro.disabled = true;
        botonCinco.disabled = true;
        botonSeis.disabled = true;
        botonSiete.disabled = true;
        botonOcho.disabled = true;
        botonNueve.disabled = true;
        botonSuma.disabled = true;
        botonResta.disabled = true;
        botonProducto.disabled = true;
        botonDivision.disabled = true;
        botonIgual.disabled = true;
        botonPunto.disabled = true;
        botonRetroceder.disabled = true;
        botonLimpieza.disabled = true;
        botonPoder.style.transform = "rotate(0deg)";
        botonPoder.style.color = "green";
        pantalla.textContent = "";
        primerNumero = "";
        operacion = "";
        segundoNumero = "";
        hayUnResultadoEnPantalla = false;
    }
    else{
        pantalla.style.background = "lightgreen"; //Enciende la pantalla.
        botonCero.disabled = false;
        botonUno.disabled = false;
        botonDos.disabled = false;
        botonTres.disabled = false;
        botonCuatro.disabled = false;
        botonCinco.disabled = false;
        botonSeis.disabled = false;
        botonSiete.disabled = false;
        botonOcho.disabled = false;
        botonNueve.disabled = false;
        botonSuma.disabled = false;
        botonResta.disabled = false;
        botonProducto.disabled = false;
        botonDivision.disabled = false;
        botonIgual.disabled = false;
        botonPunto.disabled = false;
        botonRetroceder.disabled = false;
        botonLimpieza.disabled = false;
        botonPoder.style.transform = "rotate(180deg)";
        botonPoder.style.color = "red";
    }
}

botonCero.onclick = function(){
    if(!hayUnResultadoEnPantalla){
        pantalla.textContent += 0;
    }
};
botonUno.onclick = function(){
    if(!hayUnResultadoEnPantalla){
        pantalla.textContent += 1;
    }
};
botonDos.onclick = function(){
    if(!hayUnResultadoEnPantalla){
        pantalla.textContent += 2;
    }
};
botonTres.onclick = function(){
    if(!hayUnResultadoEnPantalla){
        pantalla.textContent += 3;
    }
};
botonCuatro.onclick = function(){
    if(!hayUnResultadoEnPantalla){
        pantalla.textContent += 4;
    }
};
botonCinco.onclick = function(){
    if(!hayUnResultadoEnPantalla){
        pantalla.textContent += 5;
    }
};
botonSeis.onclick = function(){
    if(!hayUnResultadoEnPantalla){
        pantalla.textContent += 6;
    } 
};
botonSiete.onclick = function(){
    if(!hayUnResultadoEnPantalla){
        pantalla.textContent += 7;
    }
};
botonOcho.onclick = function(){
    if(!hayUnResultadoEnPantalla){
        pantalla.textContent += 8;
    }
};
botonNueve.onclick = function(){
    if(!hayUnResultadoEnPantalla){
        pantalla.textContent += 9;
    }
};

botonPunto.onclick = function(){
    if((pantalla.textContent.length>0)&&(!hayUnResultadoEnPantalla)){
        pantalla.textContent += '.'; 
        botonPunto.disabled = true;
    }
};

botonSuma.onclick = function(){
    if(pantalla.textContent.length>0){
        primerNumero =  parseFloat(pantalla.textContent);
        operacion = "+";
        pantalla.textContent = "";
        if(botonPunto.disabled){
            botonPunto.disabled = false;
        }
        if(hayUnResultadoEnPantalla){
            hayUnResultadoEnPantalla = false;
        }
    }
};

botonResta.onclick = function(){
    if(pantalla.textContent.length>0){
        primerNumero =  parseFloat(pantalla.textContent);
        operacion = "-";
        pantalla.textContent = "";
        if(botonPunto.disabled){
            botonPunto.disabled = false;
        }
        if(hayUnResultadoEnPantalla){
            hayUnResultadoEnPantalla = false;
        }
    }
};

botonProducto.onclick = function(){
    if(pantalla.textContent.length>0){
        primerNumero =  parseFloat(pantalla.textContent);
        operacion = "*";
        pantalla.textContent = "";
        if(botonPunto.disabled){
            botonPunto.disabled = false;
        }
        if(hayUnResultadoEnPantalla){
            hayUnResultadoEnPantalla = false;
        }
    }
};

botonDivision.onclick = function(){
    if(pantalla.textContent.length>0){
        primerNumero =  parseFloat(pantalla.textContent);
        operacion = "/";
        pantalla.textContent = "";
        if(botonPunto.disabled){
            botonPunto.disabled = false;
        }
        if(hayUnResultadoEnPantalla){
            hayUnResultadoEnPantalla = false;
        }
    }
};


botonIgual.onclick = function(){
    if((pantalla.textContent.length>0)&&(!hayUnResultadoEnPantalla)){
        segundoNumero =  parseFloat(pantalla.textContent);
        hayUnResultadoEnPantalla = true;
        switch(operacion){
            case "+": pantalla.textContent = parseFloat(primerNumero+segundoNumero);
            break;
            case "-": pantalla.textContent = parseFloat(primerNumero-segundoNumero);
            break;
            case "*": pantalla.textContent = parseFloat(primerNumero*segundoNumero);
            break;
            case "/": 
            if(segundoNumero!=0){
                pantalla.textContent = parseFloat(primerNumero/segundoNumero);
            }
            else{
                alert("No se puede divir por 0 (hasta ahora).");
                pantalla.textContent = "";
                hayUnResultadoEnPantalla = false;
            }
            break;
            default:
            break;
        }
        if(botonPunto.disabled){
            botonPunto.disabled = false;
        }
        primerNumero = "";
        operacion = "";
        segundoNumero = "";
    }
};

botonRetroceder.onclick = function(){
    if((pantalla.textContent.length>0)&&(!hayUnResultadoEnPantalla)){
        pantalla.textContent = pantalla.textContent.slice(0, pantalla.textContent.length-1);
    }
};

botonLimpieza.onclick = function() {
    pantalla.textContent = "";
    primerNumero = "";
    operacion = "";
    segundoNumero = "";
    hayUnResultadoEnPantalla = false;
    if(botonPunto.disabled){
        botonPunto.disabled = false;
    }
};