$(document).ready(() =>{

    //Selectores
    $('.headerClass').html('Esto es desde jquery selector de clases')
    $('#headerId').html('Esto es desde jquery selector de id')
    $('h1').html('Esto es desde jquery selector de etiqueta')

    //$('h1').attr({'dataset':'2', arial: 'test'});

    //$('p').hide();
    //$('ul').remove();

    //const li = document.createElement('li');
    //$(li).appendTo('.content-lista').text('test');

    /*
    $('#agregar').click( () => { 
        $('#contenido').addClass('text-center')
        
    });    
    $('#quitar').click( () => { 
        $('#contenido').removeClass('text-center')
        
    });
    $('#toggle').click( () => { 
        $('#contenido').toggleClass('text-center')
        
    });
    */

    /*
    let input = $('#nombre');
    let contenido = $('#contenido');

    input.keyup( () => {
        let value = input.val();
        contenido.text(value);
    })

    $('form').submit( (event) => {
        console.log('onsubmit');
        event.preventDefault();
    })
    */

    

})