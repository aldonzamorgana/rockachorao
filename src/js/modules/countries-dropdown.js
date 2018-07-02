/**
 * var CountriesDropdown - Methods for c-CountriesDropdown component
 * @module js/modules
 * @requires js/vendor/jquery
 * @requires js/vendor/select2
 * @requires js/vendor/jquery.nicescroll
 *
 */

var CountriesDropdown = function(){
  "use strict";
  var exports = {};
  var dom = {};
  var events = {};

  var catchdom = function() {
    dom.module = $(".GrupoDropdown");
    dom.countries_select = document.getElementById("dropdown");
  };

  // Initialize
  exports.init = function(file_path) {
    catchdom();
    events.createDropdown();
    // eventListeners();
  };

  // var eventListeners = function () {
  //   // On select item
  //   dom.countries_select.on("select2:select", function (event) {
  //     console.log(event)
  //   });
  // };

  // Create custom dropdown suing select2 plugin
  events.createDropdown = function(){
    document.getElementById("dropdown").addEventListener("change", function(){
      var strUser = dom.countries_select.options[dom.countries_select.selectedIndex].value;
      console.log(strUser)

      if(strUser=="1"){
        $(".espacios-content").removeClass("is-visible")
        $(".magazines").addClass("is-visible")
      }
      if(strUser=="2"){
        $(".espacios-content").removeClass("is-visible")
        $(".magazines-provincia").addClass("is-visible")
      }
      if(strUser=="3"){
        $(".espacios-content").removeClass("is-visible")
        $(".magazines-estilos").addClass("is-visible")
      }

    });
    


  };

  // On country selected
  events.selectedCountry = function(country_id){
    // Do something with this value
    console.log("Country selected: ", country_id);
  };

  return exports;
};
