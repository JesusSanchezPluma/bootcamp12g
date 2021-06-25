/*
usando mentorsArray, realizar lo siguiente:
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
-Obtener el promedio individual de cada mentor
-crear un array de strings con la siguiente forma:
"Mi nombre es {nombre} y mi promedio es de {promedio}"
-Obtener la lista de mentores cuyo promedio sea mayor a 9.5
*/

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

const getMentorsScores = mentors => {
    let mentorsQty = mentors.length;
    let htmlTotal = 0;
    let cssTotal = 0;
    let jsTotal = 0;
    let reactTotal = 0;
    mentors.forEach( mentor => {
        console.log(mentor.scores);
        let scores = mentor.scores;
        scores.forEach( score => {
            let signature = score.signature;
            console.log('signature', signature);
            let value = score.score;
            console.log('value',value);
            switch( signature ){
                case 'HTML':
                    htmlTotal += value
                    break
                
                case 'CSS':
                    cssTotal += value
                    break
                
                case 'JS':
                    jsTotal += value
                    break
                
                case 'ReactJS':
                    reactTotal += value
                    break
            }
        })
    })
    let htmlAverage = (htmlTotal / mentorsQty );
    let cssAverage = (cssTotal / mentorsQty );
    let jsAverage = (jsTotal / mentorsQty );
    let reactAverage = (reactTotal / mentorsQty );
    console.log (`Total es: ${htmlTotal} y el promedio es: ${htmlAverage}`)
    console.log (`Total es: ${cssTotal} y el promedio es: ${cssAverage}`)
    console.log (`Total es: ${jsTotal} y el promedio es: ${jsAverage}`)
    console.log (`Total es: ${reactTotal} y el promedio es: ${reactAverage}`)

    return {htmlAverage, cssAverage, jsAverage, reactAverage}
}

const getMentorAverage = scoresArray =>{
    let scoreTotal = 0;
    let signaturesQty = scoresArray.length;
    scoresArray.forEach( mentorScore => {
        let value = mentorScore.score;
        scoreTotal += value
    })
    let mentorAverage = (scoreTotal / signaturesQty);
    console.log( 'Promedio del mentor: ',mentorAverage)
    return mentorAverage
}

const createLabelsArray = mentorsData => {
    let labelsArray = []
    mentorsData.forEach(mentor => {
        let mentorName = mentor.name;
        let mentorAverage = getMentorAverage(mentor.scores);
        console.log('name ',mentorName," Average: ", mentorAverage)
        let label = `Hola, soy ${mentorName} y mi promedio es de ${mentorAverage}`;
        labelsArray.push(label);
    })
    return labelsArray
}

const getHighestAverages = mentorsData =>{
    let highestAverage = []
    mentorsData.forEach ( mentor => {
        let average = getMentorAverage( mentor.scores )
        console.log( average )
        average > 9 && highestAverage.push( mentor )
    })
    console.log (highestAverage)
    return highestAverage
}

getMentorsScores( mentorsArray )

