let songsData = [
    {
    name: "Kashmir",
    band: "Led Zeppelin",
    releaseYear: "1980",
    statistics: {
        likes: 20000,
        reproductions: 8000,
        }
    },
    {
    name: "Smells Like Teen Spirit",
    band: "Nirvana",
    releaseYear: "1989",
    statistics: {
        likes: 25000,
        reproductions: 100000,
        }
    }, {
    name: "So What",
    band: "Metallica",
    releaseYear: "1990",
    statistics: {
        likes: 12000,
        reproductions: 95000,
        }
    }, {
    name: "Nothing Else Matters",
    band: "Metallica",
    releaseYear: "1992",
    statistics: {
        likes: 128000,
        reproductions: 915000,
        }
    }, {
    name: "Daze",
    band: "Poets of the fall",
    releaseYear: "2014",
    statistics: {
        likes: 3548413,
        reproductions: 87095138,
        }
    }, {
    name: "The Sweet Scape",
    band: "Poets of the fall",
    releaseYear: "2018",
    statistics: {
        likes: 26268856,
        reproductions: 2424568,
        }
    }
]


/* 
    Agrupar unicamente los nombres de las bandas, sin repeticiones 
*/


const getBands = ( arrayAIterar ) => {
    let bandList = [];
    arrayAIterar.forEach( ( item ) => {
        console.log( item.band )
        bandList.includes( item.band ) ? null : bandList.push(item.band)
    })
    return bandList
}

const groupBands = ( arrayAIterar ) => {

    let bandList = getBands ( arrayAIterar )
    let songsGroup = [];

    bandList.forEach(( band ) => {
        songsGroup[band.replace(/ /g, "_")] = []
    })

    arrayAIterar.forEach( song => {
        switch(song.band){
            case "Metallica":
                songsGroup.Metallica.push(song)
                break
            case "Led Zeppelin":
                songsGroup.Led_Zeppelin.push(song)
                break
            case "Nirvana":
                songsGroup.Nirvana.push(song)
                break
            case "Poets of the fall":
                songsGroup.Poets_of_the_fall.push(song)
                break
        }
    })

    console.log(songsGroup)
    return songsGroup
}

getBands(songsData)
groupBands(songsData)

/* 
    [
        "La canción { cancion } es de { banda }"
    ]
*/

const creatLabelsArray = arrayAIterar => {
    let labelsArray = []
    arrayAIterar.forEach( song => {
        let { name, band } = song
        let label = 'La canción ${ name } es de ${ band }'
        labelsArray.push ( label )
        console.log( label )
    })
    return labelsArray
}

let result = creatLabelsArray( songsData )


/* usando Map */

let songLabels = songsData.map( song => {
    let { name, band } = song
    let label = `La canción ${ name } es de ${ band }`
    return label
}) 

//let songsLabels2 = songsData.map( ({ band, name }) ) 

console.log( songLabels )
console.log( songsLabels2 )

const getSongByBand = songsData => {
    let result = []
    songsData.forEach( song => {
        let { band } = song
        band === "Metallica" && result.push( song )
    })
    return result
}
console.log( result )

/*

EJEMPLO DE FILTER

let songsByBand = songsData.filter( songs => {
    return song.band === "Metallica"
})
*/

let songsByBand = songsData.filter( ({ band }) => band === 'Nirvana')

console.log( songsByBand )

