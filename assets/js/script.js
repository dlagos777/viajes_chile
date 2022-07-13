// Mensaje Sección "¿Quienes somos?"
$('#quienesomos').click(function(){
    alert("Somos la mejor empresa de viajes")
});

// Mensaje Sección "Destacados"
$('#destacados').click(function(){
    alert("Visita lugares hermosos de Chile")
});

// Mensaje Sección "Contacto"
$('#contacto').click(function(){
    alert("Viaja con Nosostros")
});

//Iniciar Tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $('#viajes-chile').tooltip('toggle')
    $('#git-icon').tooltip('toggle')

// Animacion footer
    $("footer").click(function(){
        $(".anime").animate({
        height: 'toggle'
        });
    });

// Modal formulario suscripción
$(() => {
    $("#form-suscripcion").on("submit", function(e){
        e.preventDefault();
        var nombre = $("#nombre", this).val();
        var apellido = $("#apellido", this).val();
        var email = $("#correo", this).val();

        alert(`Gracias ${nombre} ${apellido} por preferirnos, te contactaremos al ${email}.`)
    })
})