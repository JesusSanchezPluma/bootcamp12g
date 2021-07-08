/*
let personArray = [
    {
        name:"Ikki",
        lastname:"El pájaro dev"
    },
    {
        name:"Hagen Isaac",
        lastname:"Salinas Corona"
    }
]

personArray.forEach( (person, index) =>  {
    let {name, lastname } = person 
    let personRow = document.createElement("tr")
    //<tr></tr>
    let indexTd = document.createElement("td")
    //<td></td>
    let nameTd = document.createElement("td")
    //<td></td>
    let lastnameTd = document.createElement("td")
    //<td></td>
    let buttonTd = document.createElement("td")

    let nameText = document.createTextNode( name )
    let lastnameText = document.createTextNode( lastname )
    let indexText = document.createTextNode( index + 1 )
    let deleteButton = document.createElement("button")
    deleteButton.classList.add("btn", "btn-warning")

    let buttonText = document.createTextNode("Borrar")
    deleteButton.appendChild(buttonText)

    buttonTd.appendChild(deleteButton)

    indexTd.appendChild(indexText)
    nameTd.appendChild(nameText)
    lastnameTd.appendChild(lastnameText)

    personRow.appendChild( indexTd )
    personRow.appendChild( nameTd )
    personRow.appendChild( lastnameTd )
    personRow.appendChild( buttonTd )

    document.getElementById("person-table").appendChild( personRow )
})
*/

const endpoint = "https://apikoder-b2ce0-default-rtdb.firebaseio.com/jesus_sanchez/.json"

const savePerson = (nombre, apellido) => {
    // Preparando el payload
    const personJavascript = {nombre, apellido}
    const personJson = JSON.stringify(personJavascript)
    // Creando el objeto
    var xhttp = new XMLHttpRequest();
    // Configurando qué va a pasar cuando recibamos respuesta
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const respuesta = xhttp.responseText;
            console.log(respuesta)
        }
    };
    // Configurar el verbo, la dirección
    xhttp.open("POST", endpoint, true);
    // Enviar la solicitud
    xhttp.send(personJson);
}

savePerson('Jesus', 'Sanchez')

let personArray = []

let saveBtn = document.getElementById("save-person")

saveBtn.addEventListener("click", () => {
    let personObject = {}
    let fields = document.querySelectorAll("#person-form input")
    //console.log( fields )
    fields.forEach(field => {
        let property = field.name
        let value = field.value
        console.log(property, value)
        personObject = { ...personObject, [property]: value }
    })
    console.log(personObject)
    const personJson = JSON.stringify(personObject)
    //personArray.push(personObject)
    console.log(personJson)
    //printTable( personJson )
    // Creando el objeto
    var xhttp = new XMLHttpRequest();
    // Configurando qué va a pasar cuando recibamos respuesta
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const respuesta = xhttp.responseText;
            console.log(respuesta)
        }
    };
    // Configurar el verbo, la dirección
    xhttp.open("POST", endpoint, true);
    // Enviar la solicitud
    xhttp.send(personJson);
})

/*
const deletePerson = event => {
    let personIndex = event.target.dataset.personIndex
    personArray.splice(personIndex,1)
    printTable( personArray )
}

const printTable = dataToPrint => {
    document.getElementById("person-table").innerHTML = ""
    dataToPrint.forEach((item,index) => {
        let { nombre, apellidos } = item

        let personRow = document.createElement("tr")
        //<tr></tr>
        let indexTd = document.createElement("td")
        //<td></td>
        let nameTd = document.createElement("td")
        //<td></td>
        let lastnameTd = document.createElement("td")
        //<td></td>
        let buttonTd = document.createElement("td")

        let nameText = document.createTextNode(nombre)
        let lastnameText = document.createTextNode(apellidos)
        let indexText = document.createTextNode(index + 1)
        let deleteButton = document.createElement("button")
        deleteButton.classList.add("btn", "btn-warning")
        deleteButton.dataset.personIndex = index
        deleteButton.addEventListener("click", deletePerson )

        let buttonText = document.createTextNode("Borrar")
        deleteButton.appendChild(buttonText)

        buttonTd.appendChild(deleteButton)

        indexTd.appendChild(indexText)
        nameTd.appendChild(nameText)
        lastnameTd.appendChild(lastnameText)

        personRow.appendChild(indexTd)
        personRow.appendChild(nameTd)
        personRow.appendChild(lastnameTd)
        personRow.appendChild(buttonTd)

        document.getElementById("person-table").appendChild(personRow)
    })
}
*/