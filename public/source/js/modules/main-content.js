var MainContent = (function(){

  var events = {};

  events.actualizarContenidoPrincipal = function() {
    var nom_boton_principal_activo = $('.grid__item.is-active').attr('data-nom');

    $('.MainContent').removeClass('is-visible');
    $('.MainContent[data-nom="'+nom_boton_principal_activo+'"]').addClass('is-visible');

    // Acomodamos los slides
    $('.SlideFinancieras-list').slick('setPosition');   

  };

 // Contenido que va dentro del bloque "ProcedimientoPago"
  events.actualizarContenidoIProcedimientoPago = function(nombre_entidad) {
    var nom_boton_principal_activo_b2b = $('.MainContent.is-visible').attr('data-nom');
    // var nom_boton_principal_activo = $('.MainNav-item.is-active').attr('data-nom');

    var seccion_principal_activa_b2b = $('.MainContent[data-nom="'+nom_boton_principal_activo_b2b+'"]');
    // var seccion_principal_activa = $('.MainContent[data-nom="'+nom_boton_principal_activo+'"]');
    // var nom_b2b_activa = seccion_principal_activa.find('.B2bNav-item.is-active').attr('data-nom');

    // Cambiamos los SLIDES
    var cambiarTicket = (function(){
      // Ocultamos todos las cajas que contienen tickets
      seccion_principal_activa_b2b.find('.Ticket').removeClass("is-visible");
      // seccion_principal_activa.find('.GrupoTickets--tiendas').addClass('is-visible');

      // Idetificamos la caja "GrupoTickets"
      var boxGrupoTickets_b2b = seccion_principal_activa_b2b.find('.Ticket[data-nom-entidad='+nombre_entidad+']');
      // var boxGrupoTickets = seccion_principal_activa.find('.GrupoTickets[data-nom='+nom_b2b_activa+']');

      // Mostramos la caja "GrupoTickets"
      boxGrupoTickets_b2b.addClass("is-visible");
      // boxGrupoTickets.addClass("is-visible");

      // Ocultamos el Ticket de pago específico
      boxGrupoTickets_b2b.find('.Ticket').removeClass('is-visible');
      // boxGrupoTickets.find('.Ticket').removeClass('is-visible');
      // Mostramos el Ticket que corresponde al banco seleccionado
    })();


  };

  return {
    actualizarContenidoPrincipal: events.actualizarContenidoPrincipal,
    actualizarContenidoB2b: events.actualizarContenidoB2b,
    actualizarContenidoIProcedimientoPago: events.actualizarContenidoIProcedimientoPago
  };
})();
