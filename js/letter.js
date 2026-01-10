$(document).ready(function () {
    // Abrir la carta automáticamente al cargar
    $('.card_letter').animate({ top: '-90px' }, 1500, function() {
        // Animación completada, mostrar invitación
        $('#contenido').fadeIn(800); 

        // Opcional: cerrar la carta después
        setTimeout(() => {
            $('.card_letter').animate({ top: '0' }, 1000);
            // Opcional: ocultar loader después de cerrar
            $('#loader_letter').fadeOut(800);
        }, 2000); // espera 2s antes de cerrar
    });
});
