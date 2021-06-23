function someFunction(){
    console.log ( foo )
    if ( 9 > 8 ){
        var foo = "someValua"
        console.log( foo ) 
    }
}

someFunction()


let someArray = []
console.log( someArray )

// .push() agrega uno o más elementos al final de un array
// y devuelve la nueva longitud del array

someArray.pop("Jesus","Jon","Xoch", "Isra");
console.log( someArray )

// .pop() remueve el ÚLTIMO elemento de un array 
// y devuelve el item removido

someArray.pop()
console.log( someArray ) 

// .shift remueve el PRIMER elemento de un array, 
// y devuelve el item removido

someArray.shift()
console.log( someArray )

// .splice (index, howmany, items, ... )

someArray.splice (1,1,"Bulmaro", "Antonio")
console.log( someArray )

/*
    Crear una función que permita indicar la cantidad de koders 
    a guardar, que pida tantos nombres de koders como se indique,
    y al final imprima el nombre del koder y su número asignado
    Input: "Karen", "Xoch", "Wendy"
    output:
    Koder 1: "Karen",
    Koder 2: "Xoch",
    Koder 3: "Wendy"
*/

/*
    1. Pedir el número de koders y usarlo como parametro de la función
    2. Dependiendo del número dado pedir los nombres y guardarlos dentro de un arreglo
    3. Imprimir Koder (#): (#)nombre
*/

/*
function kodersNames(kodersQty){
    var kodersNamesArray = []
    for(i=0; i < kodersQty; i++){
        kodersNamesArray.push(prompt("Dame un nombre: "))
    }
    for(i=0; i < kodersQty; i++){
        console.log(`Koder ${i+1} : ${kodersNamesArray[i] }`)
    }
}
*/

/*
    1. Crear una funcion que me permita saber el nombre de algún koder basado en su número asignado
    2. Imprimir la lista de koders, en orden alfabetico descendente
    3. Crear una nueva lista que contenga los nombres de los koders con la siguiente estructura:
        koder 1: Israel Salinas Martinez (I. S. M.)
        KOder 2: Óscar Rodriguez Hernandez (o. R. H.)

*/

/*
function kodersNames(kodersQty){
    let kodersNamesArray = []
    for(i=0; i < kodersQty; i++){
        kodersNamesArray.push(prompt("Dame un nombre: "))
    }
    let koderNumber = prompt ("¿Que numero quieres ver?: ")
    if (koderNumber <= kodersQty){
        return console.log(`El nombre es: ${kodersNamesArray[koderNumber-1]}`)
    } else
    {
        return console.log("El valor no existe")
    }
}
*/

/*
function kodersNames2(kodersQty){
    let kodersNamesArray = []
    for(i = 0; i < kodersQty; i++){
        kodersNamesArray.push(prompt("Dame un nombre: "))
    }
    kodersNamesArray.sort()
    for(i=(kodersQty-1); i>=0;i--){
        console.log(kodersNamesArray[i])
    }
}
*/

function kodersFullName(kodersQty){
    let kodersNamesArray = []
    for(i = 0; i < kodersQty; i++){
        kodersNamesArray.push(prompt("Dame un nombre y un apellido: "))
    } 
    for(i = 0; i < kodersNamesArray.length; i++){
        let newArray = kodersNamesArray[i].split(" ")
        var name = ""
        for( j = 0 ; j < newArray.length ; j++){
            var letter = newArray[j].charAt(0).toUpperCase()
            //let lastName = newArray[i].charAt(0).toUpperCase()
            name = name + letter + "."
        }
        console.log(`Koder ${i+1}: ${kodersNamesArray[i]} (${name})`)
    }
}
