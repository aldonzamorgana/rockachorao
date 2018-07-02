// Inicializamos los módulos
$(function(){


  var App = {};
  // Countries dropdown
  App.countries_dropdown = new CountriesDropdown();
  App.countries_dropdown.init();

  App.instructions_sent_bbva = new SendInstructions();
  App.instructions_sent_bbva.init(".Ticket-bbva[data-nom-entidad='bbva-bancomer']");

  App.instructions_sent_banamex = new SendInstructions();
  App.instructions_sent_banamex.init(".Ticket-banamex[data-nom-entidad='banamex']");

  App.instructions_sent_santander = new SendInstructions();
  App.instructions_sent_santander.init(".Ticket-santander[data-nom-entidad='santander']");

  App.instructions_sent_banorte = new SendInstructions();
  App.instructions_sent_banorte.init(".Ticket-banorte[data-nom-entidad='banorte']");

  App.instructions_sent_scotiabank = new SendInstructions();
  App.instructions_sent_scotiabank.init(".Ticket-scotiabank[data-nom-entidad='scotiabank']");

  App.instructions_sent_hsbc = new SendInstructions();
  App.instructions_sent_hsbc.init(".Ticket-hsbc[data-nom-entidad='hsbc']");

  App.instructions_sent_bancoazteca = new SendInstructions();
  App.instructions_sent_bancoazteca.init(".Ticket-azteca[data-nom-entidad='banco-azteca']");

  App.instructions_sent_inbursa = new SendInstructions();
  App.instructions_sent_inbursa.init(".Ticket-inbursa[data-nom-entidad='inbursa']");

  App.instructions_sent_generica = new SendInstructions();
  App.instructions_sent_generica.init(".Ticket-generica[data-nom-entidad='generica']");

  App.info_via_contrated_email_banamexempresas = new SendInformationContractedEmail(".Ticket[data-nom-entidad='banamex-empresas']");
  App.info_via_contrated_email_banamexempresas.init();

  App.info_via_contrated_email_bbva = new SendInformationContractedEmail(".Ticket[data-nom-entidad='bbva-bancomer']");
  App.info_via_contrated_email_bbva.init();

  App.info_via_contrated_email_bbva = new SendInformationContractedEmail(".Ticket[data-nom-entidad='scotiabank']");
  App.info_via_contrated_email_bbva.init();

  App.info_via_contrated_email_bbva = new SendInformationContractedEmail(".Ticket[data-nom-entidad='banorte']");
  App.info_via_contrated_email_bbva.init();

  App.instructions_sent_eleven = new SendInstructions();
  App.instructions_sent_eleven.init(".Ticket-eleven[data-nom-entidad='eleven']");

  App.instructions_by_eleven = new InstructionsBy();
  App.instructions_by_eleven.init(".Ticket[data-nom-entidad='eleven']");

  App.instructions_by_generica = new InstructionsBy();
  App.instructions_by_generica.init(".Ticket[data-nom-entidad='generica']");

  App.instructions_by_generica = new InstructionsBy();
  App.instructions_by_generica.init(".Ticket[data-nom-entidad='bbva-bancomer']");
  
  App.entity_search_select = new MyBankSearchSelect("data/entidades.json", SlideFinancieras);
  App.entity_search_select.init();
  
  // App.entity_search_select_tiendas = new MyBankSearchSelect("data/entidades-tiendas.json", 'tiendas', SlideFinancieras);
  // App.entity_search_select_tiendas.init();

  MainNav.init();
  B2bNav.init();
  // BuscadorEntidades.init();
  SlideFinancieras.init();
  Ticket.init();
  // EnvioInstrucciones.init();
});
