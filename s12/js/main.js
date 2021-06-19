/*
    Creamos una variable para guardar la cadena resultante 
    -obtener el número de caracteres
    -Definir un rango númerico que determine el codigo ascii de los caracteres que estaran disponibles
    -Obtener de forma aleatoria algún número dentro de ese rango
    -Obtener el caracter correspondiente al número seleccionado
    -Almacenamos en una variable el caracter obtenido
    -Evaluamos si el caracter existe en la cadena de resultado
    --Si el caracter no existe, lo agregamos a la cadena de resultado
    --Si el caracter existe en la cadena, debemos generar un nuevo caracter
    -Repetir n veces
    -Devolver la cadena de resultado
*/

function createRandomString( charactersQty ){
    var result =""
    /* Rango: 48 - 90 */
    evaluateCharacter( result )
    for( i=0 ; i < charactersQty; i++){
        result += evaluateCharacter( result )
    }
    console.log(`result = ` , result)
    console.log(`lenght = ` , result.length)
}

function evaluateCharacter( completeString){
    var characterCode = Math.floor ( Math.random() * (91-48) + 48 )
    var character = String.fromCharCode( characterCode )
    return !completeString.includes(character) ? character : evaluateCharacter( completeString )
}
