var numberOne = 3
var numberTwo = 5

//console.log( numberOne )

function sumarDosNumeros(numero1, numero2){

    //console.log( `numberOne`, numberOne )
    var resultado = numero1 + numero2
    //console.log( resultado )
    return resultado
}

//sumarDosNumeros( 3 , 4 )

//console.log( resultado )

//console.log( sumarDosNumeros( 3 , 4 ) )

var suma = sumarDosNumeros ( 4 , 9 )
//console.log( suma )

function evaluarSiEsMayor(numero1, numero2){
    var result;
    if (numero1>numero2){
        result = true
    } else{
        result = false
    }
    
    var foo
    var dhe

    return [result, foo, dhe]
}

/*
    Ejercicio 1:
    Recibir nombre en un string y apellidos en otro string
    devolver nombre en miniscula y apellidos en mayuscula en una sola cadena
*/


function cadenaNombres( nombre, apellido ){

    var nombreMiniscula = nombre.toLowerCase();
    var nombreMayuscula = apellido.toUpperCase();
    
    var cadenaTransformada = nombreMiniscula + " " + nombreMayuscula

    return cadenaTransformada

}

var nombre = prompt("Dame tu nombre= ")
var apellido = prompt("Dame tu apellido= ")

console.log(cadenaNombres (nombre, apellido))
