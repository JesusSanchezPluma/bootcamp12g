$(document).ready(() =>{

    $('#green').click( () => {
        //$('#element').removeClass();
        //$('#element').addClass('bg-success mt-5 text-center');
        //$('#element').toggleClass('bg-success mt-5 text-center')
        $('#element').hide(100)
        $('#element').show(100).css("background","green")
        
    })

    $('#yellow').click( () => {
        //$('#element').removeClass();
        //$('#element').addClass('bg-warning mt-5 text-center');
        //$('#element').toggleClass('bg-warning mt-5 text-center')
        $('#element').hide(100)
        $('#element').show(100).css("background","yellow")
        
    })

    $('#red').click( () => {
        //$('#element').removeClass();
        //$('#element').addClass('bg-danger mt-5 text-center');
        //$('#element').toggleClass('bg-danger mt-5 text-center')
        $('#element').hide(100)
        $('#element').show(100).css("background","red")
        
    })

})