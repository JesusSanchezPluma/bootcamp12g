let someObject = {
    name:"x",
    lastName:"y"
}

let nombre = "Eduardo"
let apellidos = "Pérez"

/*
    FUNCIÓN CONSTRUCTORA
*/

function Person (name, lastName, age){
    this.name = name
    this.lastName = lastName
    this.initials = `${this.name.charAt(0).toUpperCase()}. ${this.lastName.charAt(0).toUpperCase()}.`
    this.saludar =  function(){
        console.log(`Hola, soy ${this.name} ${this.lastName}`)
    }
    let edad = age ? `${age} años` : "no disponible"
    this.edad = edad
}

let persona1 =  new Person ( nombre, apellidos ) 
let persona2 =  new Person ( "Wendy", "Ortega" )

console.log( persona1 )
console.log( persona2 )