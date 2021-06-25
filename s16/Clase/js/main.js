
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
    }, 
    {
    name: "So What",
    band: "Metallica",
    releaseYear: "1990",
    statistics: {
        likes: 12000,
        reproductions: 95000,
        }
    }
]


/* 
    Agrupar unicamente los nombres de las bandas, sin repeticiones 
*/





/* 
    Agrupar en otro lugar las canciones de cada banda
*/




/* 
    Saber cuál es la canción con más likes
    ( nombre de la canción y nombre de la banda)
*/

let topSong = data => {
    let song = data.reduce((topSong, currentSong) =>{
        if(!topSong.statistics)
            return currentSong
        return currentSong.statistics.likes > topSong.statistics.likes ? currentSong : topSong
    },{})
    console.log(song)
    console.log(`La canción ${song.name} de la banda ${song.band} es la canción con más likes, con ${song.statistics.likes} de likes`)
}
topSong(songsData)

/*
    Saber cuál es la canción con más reproducciónes
    ( nombre de la canción y nombre de la banda) 
*/




