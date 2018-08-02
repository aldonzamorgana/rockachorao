// Inicializamos los módulos
$(function(){
  var App = {};
  // Countries dropdown
  MainNav.init();
  // CountriesDropdown.init()
  // B2bNav.init();
  // BuscadorEntidades.init();
  SlideFinancieras.init();
  Ticket.init();

  App.countries_dropdown = new CountriesDropdown();
  App.countries_dropdown.init();
  
  // EnvioInstrucciones.init();
});
