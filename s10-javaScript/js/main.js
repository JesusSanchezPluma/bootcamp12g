//alert("Hola koders")

console.log("Hola Koders desde consola")
console.error("Houston tenemos un problema")
console.warn("Cuidado !!!")
console.log()

//prompt("Ingresa tu nombre:")

/*
    Operador de asignación:
    =   Asignación
    +=  Asignación con adición
    -=  Asignación con sustracción
    *=  Asignación con multiplicación
    /=  Asignación con división
    %=  Asignación con módulo
*/

var foo /* Declaración de variable */

foo = "lestat" /* Asignación */

var foo = "leastat" /* Declaración asignante */

var name = prompt("Ingresa tu nombre:")
var lastname = prompt("Ingresa tus apellidos")

console.log(name)
console.log(lastname)

console.log(`Tu nombre completo es: ` + name + ` ` + lastname)

var age 

console.log(typeof name)
console.log(typeof age)

var someNumber = 5
var someOtherNumber = 7

console.log( someNumber + someOtherNumber )
console.log( someNumber - someOtherNumber )
console.log( someNumber * someOtherNumber )
console.log( someNumber / someOtherNumber )
console.log( someNumber % someOtherNumber )

var thirdNumber = "37"

console.log( someNumber + thirdNumber )
console.log( thirdNumber + someNumber )

/* 
    " Operadores de comparación: "
    --------------------------
    ==  Comparación
    === Extrema comparación
    !=  Diferente
    !== Extradamente diferente
    >   mayor que
    <   menor que
    >=  mayor o igual que
    <=  menor o igual que
*/

var testNumber = 12
var testStringNumber = "12"

console.log( testNumber == testStringNumber )
/* TRUE */

console.log( testNumber === testStringNumber )
/* FALSE */

console.log( testNumber != testStringNumber )
/* FALSE */

console.log( testNumber !== testStringNumber )
/* TRUE */

var string1 = "a"
var string2 = "b"

console.log( string1 > string2 )
/* TRUE because Comparación Lexicográfica */

/* 
    Ejercicio 1

    Pedir 2 números al usuario y mostrar en consola
    el resultado de aplicar todas las operaciones 
    aritmeticas de esos 2 números
*/

var num1 = prompt("Dame el número 1: ");
var num2 = prompt("Dame el número 2: ");

num1 = parseInt(num1);
num2 = parseInt(num2);

console.log( num1 + ' + '  + num2 + ' = ' + (num1 + num2) );
console.log( num1 + num2 );
console.log( num1 - num2 );
console.log( num1 * num2 );
console.log( num1 / num2 );
console.log( num1 % num2 );

/* 
    Ejercicio 2

    Pedir 2 números al usuario y escribir en consola
    si el primer número es mayor al segundo
*/

console.log ( num1 > num2 );

/* 
    Ejercicio 3

    Pedir 2 números al usuario y determinar si la primera 
    letra aparece antes o después en el alfabeto
*/

num1 = num1.toString();
num2 = num2.toString();

console.log(typeof num1);
console.log(typeof num2);

console.log(num1);
console.log(num2);

console.log (`Número 1 es = ` + num1);
console.log (`Número 2 es = ` + num2);

console.log (num1 > num2);