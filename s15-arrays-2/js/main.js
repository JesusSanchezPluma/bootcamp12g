/* let namesArray = [
    "Israel Salinas",
    "David Moranchel",
    "Carlos Silva",
    "Michael Villalba"
] */

/* Regrese un número aleatorio desde cero hasta array.length */

/*
const getRandomIndex = array => Math.floor( Math.random( ) * array.length ) 

let randomIndex = getRandomIndex ( namesArray )
console.log( randomIndex )
*/

/*
const printNameByIndex = Index => {
    return namesArray[index]
}
*/

/*
const printNameByIndex = (indexToFind, arrayToSearch) => arrayToSearch[indexToFind]

let someName = printNamebyindex ( getRandomIndex ( namesArray ), namesArray )
console.log( someName )


const sumar =  ( a , b ) => a + b;

let myObject = {
    name: "Ikki",
    alias:"El pajaro DEV"
}

let birdName = myObject.name
let birdAlias =  myObject.alias
*/

/* Destructuring */

/*
let {birdName:name,birdAlias:alias} = myObject

let results = {} */ /* Objeto Vacio */
/*console.log( results )

results.results1 = sumar(2,2)
results.results2 = sumar(6,6)
console.log( results )*/

let dataArray = [
    [
        "Israel",
        "Salinas Martinez"
    ],
    [
        "David",
        "Cermeño Moranchel"
    ],
    [
        "Charles",
        "Silva Pepito"
    ],
    [
        "Michael",
        "Villalba Sotelo"
    ]
]

/*
    mentorsArray=[
        {
            name:"Israel",
            lastName:"Salinas"
        }... {...}
    ]
*/

const objectFromArray = arrayToConvert => {
    let mentorObject = {name: arrayToConvert[0], lastname: arrayToConvert[1]}
    return mentorObject
}

const createMentorsArray = dataArray =>{
    let mentorsArray = []
    for ( i = 0; i < dataArray.length; i++ ){
        let item = dataArray[i]
        mentorsArray.push( objectFromArray( item ) )
    }
    return mentorsArray
}

console.log( createMentorsArray( dataArray ) )


let namesArray = [
    "ivan",
    "Angel",
    "Alejandra"
]

namesArray.forEach((name,index,arr) =>{
    let resultString = `El nombre: ${index} es ${name}`
    console.log(resultString)
})
