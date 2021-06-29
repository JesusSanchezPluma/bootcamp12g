var mentorsArray = [
    {
        name:"Israel Salinas Martinez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"David Cermeño Moranchel",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Charles Silva",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Michael Villalba Sotelo",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
]

/*  Crear un array de strings con la siguiente forma: 
    "Mi nombre es {nombre} y mi promedio es de {promedio}"
*/

const createLabelsArray = dataArray => {
    let labelsArray = dataArray.map ( item => {
        let { name } = item
        return `Mi nombre es ${ name } y mi promedio es de { scores }`
    })
    return labelsArray
}

console.log( createLabelsArray( mentorsArray ) )

/*
    Arreglo que solo obtenga los nombres de los mentores
*/

const getMentorNamesArray = dataArray => {
    let mentorsNames = dataArray.map( item =>{
        return item.name
    })
    return mentorsNames
}

console.log( getMentorNamesArray( mentorsArray ) )


/*
    mejores en HTML
*/


const getBestAtHtml = dataArray =>{

    let result = dataArray.filter ( item => {
        return item.scores[0].score > 8
    })
    return result
}

console.log( getBestAtHtml( mentorsArray ) )


/* 
    Crear un nuevo array con las iniciales de cada mentor 
    [
        "I. S. M."
    ]
*/

const getInitialsArray = dataArray => {
    let namesArray = dataArray.map ( item =>{
        let name = item.name
        let nameArray = name.split(" ")
        let initialsString =''
        nameArray.forEach( word => {
            initialsString += `${word.charAt(0).toUpperCase()}. `
        })
        return initialsString
    })
    return namesArray
}

console.log(getInitialsArray( mentorsArray ) )

/*
    Crear un nuevo arrar con los mentores cuyos nombres comiencen con vocal
*/

const getMentorsWithVowel = dataArray => {
    let result = dataArray.filter( item => {
        let name = item.name
        let firstLetter = name.charAt(0)
        return firstLetter.match(/[aeiou]/i)
    })
    return result
}

console.log( getMentorsWithVowel( mentorsArray) )

/* REDUCE */

let uglyArray = [
    [
        "Israel","Salinas Martínez"
    ],
    [
        "David","Cermeño Moranchel"
    ],
    [
        "Charles","Silva"
    ],
    [
        "Michael","Villalba Sotelo"
    ],
    [
        "Alejandra","Padilla"
    ]
]

/*
    [
        {
        name:"Israel",
        lastName:"Salinas Martinez"
        }
    ]
*/

let createNewArray = oldArray => {
    let newArray = oldArray.reduce( ( accum, current ) => {
        let [ name, lastName ] = current
        let personObject = { name, lastName }
        return personObject.name.charAt(0).match(/[aeiou]/i) ? [...accum, personObject] : accum
    },[])
    return newArray
}

console.log( createNewArray( uglyArray ))