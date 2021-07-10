/*
- Arreglar el bug de que no se reinicia la lista de números
- Crear una función que obtenga el producto de todos los números seleccionados y lo agregue al encabezado
- Hacer que el encabezado sólo se muestre cuando damos click al botón ok
- Permitir que los números puedan seleccionarse y deseleccionarse (*los números desactivados no deben formar parte del resultado )
*/

const printDivisibles = () => {
    let limit = $("#limit").val()
    let divisor = $("#divisor").val()

    removeCards()

    for( let i = 0; i < limit; i++){
        i % divisor === 0 && printCard( i )
    }
    $(".number-card").click( ( event ) => {
        event.stopPropagation()
        console.log( event.target)
        $(event.target).addClass("active")
    })
}

const printCard = number => {
    let cardHtml = `
        <div class="col-3">
            <div class="card number-card">
                <div class="card-body d-flex justify-content-center align-items-center">
                    <h1>${number}</h1>
                </div>
            </div>
        </div>
    `
    $("#card-wrapper").append(cardHtml)
}

$("#go").click( printDivisibles )

/*
$('document').on("click",'.number-card',(event) => {
    console.log( event.target )
})
*/

const removeCards = () => {
    $('#card-wrapper div').remove();
}